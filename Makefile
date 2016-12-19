BUILD        = ./dist
NODE_MODULES = ./node_modules
NPM_BIN      = $(shell npm bin)
TEST_FILES   = $(shell find ./dist/test -name '*.js')
MOCHA_OPTION = --require intelli-espower-loader

.PHONY: clean reinstall test uninstall

all: $(BUILD)

$(NODE_MODULES):
	npm install

$(BUILD): $(NODE_MODULES) clean
	$(NPM_BIN)/webpack --bail
	$(NPM_BIN)/tsc -p .

clean:
	rm -rf $(BUILD)

test: $(BUILD)
	$(NPM_BIN)/mocha $(MOCHA_OPTION) $(TEST_FILES)
	$(NPM_BIN)/karma start

uninstall: clean
	rm -rf $(NODE_MODULES)

reinstall: uninstall $(NODE_MODULES)