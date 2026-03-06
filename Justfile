#1. build c code and python ext:
#rm -rf build/ && cmake -S . -B build -DCMAKE_BUILD_TYPE=Release && cmake --build build

#2. run sanity test
#PYTHONPATH=./build/  python test.py

#3. run python scripts to produce plots
#PYTHONPATH=./build/  python run_tests.py

#4. produce docs
#sh build-pdf.sh

#3. build the wasm version
#rm -rf build-wasm && emcmake cmake -S . -B build-wasm -DCMAKE_BUILD_TYPE=Release && cmake --build build-wasm


#4. build vite
#pnpm run build

#5. deploy
#pnpm run deploy

default:
	@just --list

build:
	rm -rf build/ && cmake -S . -B build -DCMAKE_BUILD_TYPE=Release && cmake --build build

sanity:
	PYTHONPATH=./build/ python test.py

plots:
	PYTHONPATH=./build/ python run_tests.py

docs:
	sh build-pdf.sh

build-wasm:
	rm -rf build-wasm && emcmake cmake -S . -B build-wasm -DCMAKE_BUILD_TYPE=Release && cmake --build build-wasm

vite-build:
	pnpm run build

deploy:
	pnpm run deploy

all: build sanity plots docs build-wasm vite-build deploy
