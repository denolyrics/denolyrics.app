#!/bin/bash

#!/bin/bash

# CONVENTIAL COMMIT SCOPES
texts=("[FIX]" "[FEAT]" "[DELETE]")

# STRING FOR VALIDATE
input=$GIT_COMMIT_MESSAGE

# Variable de validación
valid=false

# Iterar sobre el array de textos
for text in "${texts[@]}"; do
    # Comprobar si el string contiene el texto actual
    if [[ "$input" == *"$text"* ]]; then
        valid=true
        break
    fi
done

# Imprimir el resultado de la validación
if [ "$valid" = true ]; then
    echo "El string es válido."
else
    echo -e "Please write commit with a scope by example: \n"
    echo " [FEAT] must be used when a commit adds a new feature in the repository."
    echo " [FIX] must be used when a commit represents a bug fix in the repository."
    echo " [DELETE] must be used when a commit represents a deletion of code in the repository."
fi
