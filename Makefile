# Constants
BIN="./bin/iterm-colors.js"
JSON_DIR="./json/"
JSON_BUNDLE="./bundle.json"

all: bundle json

bundle: json
	${BIN} bundle ${JSON_DIR} > ${JSON_BUNDLE}

json:
	exec ./build.sh
