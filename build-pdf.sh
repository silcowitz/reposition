#!/bin/bash
#git ls-files -z \
find . -type f \( -name 'solve.tex' -o -path './plots/*' \) -print0 \
| tar --null -T - -cf - \
| podman run -i --rm \
  -w /root \
  -v "$(pwd)/public:/root/public" \
  kjarosh/latex:2025.1-medium \
  sh -c "
  tar -xf - &&
  ls -lh &&
  mkdir -p tmp &&
  latexmk -pdf -outdir=tmp solve.tex &&
  mv tmp/solve.pdf public/"
