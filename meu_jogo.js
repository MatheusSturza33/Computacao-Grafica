class MeuJogo extends JS_CG_2D_API {

acaoAoIniciar() {
    this.frames = this.carregarFrames("pikachu", 4);
    this.jogador = new Sprite(16, 16);
    this.jogador.setAnimacao(this.frames);
    this.jogador.setVelocidade(0, 0);
    this.cima = false;
    this.baixo = false;
    this.esquerda = false;
    this.direita = false;
}

atualizar() {
    if(this.direita){
        this.jogador.setVelocidade(1,0);
    }

    if(this.cima){
        this.jogador.setVelocidade(0,-1);
    }

    if(this.esquerda){
        this.jogador.setVelocidade(-1,0);
    }

    if(this.baixo){
        this.jogador.setVelocidade(0,1);
    }
     this.jogador.atualizar();
}

teclaPressionada(e){
    if(e.key == "ArrowUp"){
        this.cima = true;
    }

    if(e.key == "ArrowDown"){
        this.baixo = true;
    }

     if(e.key == "ArrowLeft"){
        this.esquerda = true;
    }

     if(e.key == "ArrowRight"){
        this.direita = true;
    }
}

teclaLiberada(e){
    if(e.key == "ArrowUp"){
        this.cima = false;
    }

    if(e.key == "ArrowDown"){
        this.baixo = false;
    }

     if(e.key == "ArrowLeft"){
        this.esquerda = false;
    }

     if(e.key == "ArrowRight"){
        this.direita = false;
    }
}

desenhar() {
    this.limparTela("lightblue");
    this.desenharSprite(this.jogador);
}
}
window.addEventListener("load", () => {
    new MeuJogo("Meu Primeiro Jogo", "meuCanvas", 800, 600);
});