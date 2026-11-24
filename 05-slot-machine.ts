// ==========================================
// 5. Slot Machine
// ==========================================

/**
 * El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases
 * donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia)
 * tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
 *
 * Cuando se llame al método play el número de monedas se debe incrementar de forma automática
 * y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas.
 * El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá
 * mostrarse por consola el mensaje:
 * "Congratulations!!!. You won <número de monedas> coins!!";
 * y reiniciar las monedas almacenadas.
 * En caso contrario deberá mostrar otro mensaje:
 * "Good luck next time!!".
 */
export class SlotMachine {
  private coins: number;

  constructor() {
    this.coins = 0;
  }

  private getRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  public play(): void {
    this.coins++;
    const roulette1 = this.getRandomBoolean();
    const roulette2 = this.getRandomBoolean();
    const roulette3 = this.getRandomBoolean();

    if (roulette1 && roulette2 && roulette3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }

  public getCoins(): number {
    return this.coins;
  }
}

