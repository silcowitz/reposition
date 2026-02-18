#!/usr/bin/env python3
import asyncio
import random
import sys
import solve
import websockets
import numpy as np
import traceback
import reposition


HOST = "127.0.0.1"
PORT = 9999


#x = solve.solve(p,Mi, R, L2)
#print(x)

async def handler(ws):
    print("client connected")
    stop = asyncio.Event()

    async def ticker():
        try:
            print('running')
            N = 256
            m = np.array([1.0 if n==N-1+1 or n==0 or n==N//4 else 0.001 for n in range(N)])
            Mi, R, L2 = solve.setup(m)
            x0 = np.zeros((N*3,1))
            delta = np.array([-1.0,0.0,0.0])
            delta /= np.linalg.norm(delta)
            for j in range(0,N):
                print(x0[j*3:(j+1)*3,0])

                x0[j*3:(j+1)*3,0] = np.array([6,-7,0]) + delta * j

            fix1 = x0[0:3,0].copy()
            fidx = N-1
            fix2 = x0[(fidx)*3:(fidx+1)*3,0].copy()


            #x0 = np.array([[float(n),0,0.0] for n in range(N)]).reshape(-1,1)
            x = x0.copy()
            p = x0.copy()
            z = None
            for i in range(int(9e9)):
                if stop.is_set():
                    break
                #print('solve')

                dt = 0.5
                p[:] = x +(x-x0)*1.002


                for j in range(N):
                    p[j*3:(j+1)*3,0] += np.array([0,-1,0]) * 0.098 * dt * 1

                #for j in range(N):
                #    p[j*3:(j+1)*3,0] += np.random.uniform(-0.01, 0.01, (3,))

                p[0:3,0] = fix1
                p[(fidx)*3:(fidx+1)*3,0] = fix2

                x0[:] = x

                reposition.solve2( p[:,0], m,  x[:,0] )

                if False:
                    y, z = solve.solve(p, Mi, R, L2, maxiter=5, pre_z = z)
                    e = np.linalg.norm(x-y)**2
                    print(e)
                    if e>0.1:
                        print(p)
                        np.save('x0.npy', x0)
                        np.save('p.npy', p)
                        exit(-1)


                msg = ""
                for i in range(0,N):
                    v1,v2,v3 = [ f"{float(v):.3f}" for v in (x[i*3:i*3+3]*0.1).flatten() ]
                    id_ = f"p{i}"
                    msg += f"POINT {id_} {v1} {v2} {v3}\n"
                await ws.send(msg)

                #print(p)

                #p[:] = x
                #exit(-1)
                await asyncio.sleep(0.0166)
        except Exception as e:
            print(e)
            traceback.print_exc()
            raise e
        except asyncio.CancelledError:
            return

    tick_task = asyncio.create_task(ticker())

    try:
        async for message in ws:
            s = message.strip()
            print("from client:", s)
            if s == "GETSTATE":
                await ws.send("CLEAR()\n")
    except websockets.exceptions.ConnectionClosed:
        pass
    except Exception as e:
        print(e)
        raise e
    finally:
        stop.set()
        tick_task.cancel()
        try:
            await tick_task
        except Exception:
            pass
        print("client disconnected")


async def main():
    async with websockets.serve(handler, HOST, PORT):
        print(f"Test WS server listening on ws://{HOST}:{PORT}")
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Shutting down")
