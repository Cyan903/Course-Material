abstract class Test {
    private static total: number = 0;
  
    constructor(private readonly a: string, public b: string) {
      Test.total += 1;
    }
  
    protected who(this: Test): void {
      console.log(this.a);
    }
  
    get getTotal(): number {
      return Test.total;
    }
  
    abstract how(): void;
  }
  
  class Test2 extends Test {
    how(): void {
      console.log(this.b);
      this.who();
    }
  }
  
  const item: Test2 = new Test2("Hello", "World");
  const item2: Test2 = new Test2("Hello", "World");
  const item3: Test = new Test2("Hello", "World");
  const item4: Test2 = new Test2("Hello", "World");
  const item5: Test2 = new Test2("Hello", "World");