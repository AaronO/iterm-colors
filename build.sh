# Constants
BIN="./bin/iterm-colors.js"
EXT=".itermcolors"
OUTPUT_DIR="json"

# main build
function build {
    local filename="$(basename ${1})"

    # Replace " " with "_"
    filename=${filename// /_}

    # Remove extension
    filename="${filename%.*}"

    # Convert to lowercase
    filename=$(echo $filename | tr '[:upper:]' '[:lower:]')

    # Echo
    echo "Building ${filename}" >&2

    # Compile and save
    ${BIN} $1 > "${OUTPUT_DIR}/${filename}.json"
}

# Ensure output dir exists
mkdir -p ${OUTPUT_DIR}

# Change our bash separators
# !!! Really important for correct input
IFS=$(echo -en "\n\b")

for scheme in $(find ./schemes -name "*.itermcolors")
do
    build ${scheme}
done
