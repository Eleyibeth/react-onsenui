for file in (ls ./src/components/ | grep -v 'reactUtil' | grep -v 'todo' | grep -v "BaseDialog" | grep -v "Util")
  echo "Generate $name"
  set name (echo $file | cut -d '.' -f1 )
  node ./scripts/react-docgen.js ./src/components/$file > docs/$name.json
end

