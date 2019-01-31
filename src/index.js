export const createTarget = function createTarget(name) {
	const miniProgramTarget = compiler => {
		const { options } = compiler;
		compiler.apply(
			new JsonpTemplatePlugin(options.output),
			new FunctionModulePlugin(options.output),
			new NodeSourcePlugin(options.node),
			new LoaderTargetPlugin('web')
		);
	};

	// eslint-disable-next-line no-new-func
	const creater = new Function(
		`var t = arguments[0]; return function ${name}(c) { return t(c); }`
	);
	return creater(miniProgramTarget);
};

export const Targets = {
	Wechat: createTarget('Wechat'),
	Alipay: createTarget('Alipay'),
	Baidu: createTarget('Baidu')
};

export default class miniAppPlugin {
    constructor() {
        
    }
}