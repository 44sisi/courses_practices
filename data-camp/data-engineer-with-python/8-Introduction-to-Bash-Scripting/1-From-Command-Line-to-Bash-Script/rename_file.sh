#!/bin/bash

for filename in a*; do
  newFilename=$(sed -E "s/a/b/" <<< "$filename")
  mv "$filename" "$newFilename"
done
