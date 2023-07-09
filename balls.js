class MyExtension {
  getInfo() {
    return {
      id: 'myextension',
      name: 'My Extension',
      blocks: [
        {
          opcode: 'greet',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Greet [name]',
          arguments: {
            name: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Scratcher'
            }
          }
        }
      ]
    };
  }

  greet(args) {
    const name = args.name;
    return `Hello, ${name}!`;
  }
}

Scratch.extensions.register(new MyExtension());
