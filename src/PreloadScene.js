import Phaser, { Scene } from "phaser";
import logoImg from './assets/logo.png';
import sparkImg from './assets/blue.png';

class PreloadScene extends Scene {
    constructor() {
        super('preload');
    }

    loadImage (id, img) {
        return img.split(":")[0] === "data" ? this.textures.addBase64(id, img) :  this.load.image(id, img);
    }

    preload() {
        this.loadImage('logo', logoImg);
        this.loadImage('spark', sparkImg);
    }

    create() {
        const logo = this.add.image(400, 300, 'logo');
        logo.setDepth(99);

        var particles = this.add.particles('spark');

        var emitter = particles.createEmitter();
    
        emitter.setPosition(400, 300);
        emitter.setSpeed(200);
        emitter.setBlendMode(Phaser.BlendModes.ADD);

        this.input.on('pointerdown', () => this.scene.start('game'))
    }
}

export default PreloadScene;