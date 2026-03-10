default:
	@just --list

build:
	rm -rf build/ && cmake -S . -B build -DCMAKE_BUILD_TYPE=Release && cmake --build build

sanity: build
	PYTHONPATH=./build/ python test.py

plots: build
	PYTHONPATH=./build/ python run_tests.py

docs: plots
	sh build-pdf.sh

build-wasm:
	rm -rf build-wasm && emcmake cmake -S . -B build-wasm -DCMAKE_BUILD_TYPE=Release && cmake --build build-wasm

vite-build: build-wasm
  pnpm install
  pnpm run build

deploy: vite-build docs
	pnpm run deploy

all: build sanity plots docs build-wasm vite-build deploy
