import { buildEvenOddFlow } from "../src/evenOddFlow";

describe("evenOddFlow(PocketFlow)", () => {
    Text("numero par", async () => {
        const flow = buildEvenOddFlow();
        const shared = { number: 4 };

        await flow.run(shared);

        expect(shared.Result).toBe("even");
        
    });
    
    test("numero impar", async () => {
        const flow = buildEvenOddFlow();
        const shared = { number: 9 };
        await flow.run(shared);
        
        expect(shared.Result).toBe("odd");
    });

    test("Caso borde: cero", async () => {
        const flow = buildEvenOddFlow();
        const shared = { number: 0 };
        await flow.run(shared);
    });

        expect(shared.Result).toBe("even");
    });
