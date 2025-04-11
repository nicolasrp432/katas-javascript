import { describe, it, expect } from 'vitest'
import { sumar } from './01-sumar.js'

// Un escenario
describe(
    'Suma de dos números',
    function () {

        it(
            'Given dos números positivos (2 y 3), when se suman, then el resultado debe ser 5',
            function () {
                // Given dos números positivos (2 y 3)
                const numero1 = 2
                const numero2 = 3

                // When se suman
                const resultado = sumar(numero1, numero2)

                // Then el resultado debe ser 5
                expect(resultado).toBe(5)
            }
        )

        it(
            'Given un número positivo y uno negativo (5 y -3), when se suman, then el resultado debe ser 2',
            function () {
                // Given un número positivo y uno negativo (4 y -3)
                const numero1 = 5
                const numero2 = -3

                // When se suman
                const resultado = sumar(numero1, numero2)

                // Then el resultado debe ser 2
                expect(resultado).toBe(2)
            }
        )

        it(
            'Given dos números negativos (-1 y -1), when se suman, then el resultado debe ser -2',
            function () {
                // Given dos números negativos (-1 y -1)
                const numero = -1

                // When se suman
                const resultado = sumar(numero, numero)

                // Then el resultado debe ser -2
                expect(resultado).toBe(-2)
            }
        )

        it(
            'Given cero y un número (0 y 5), when se suman, then el resultado debe ser el mismo número (5)',
            function () {
                // Given cero y un número (0 y 5)
                const numero = 5

                // When se suman
                const resultado = sumar(0, numero)

                // Then debe ser el mismo número (5)
                expect(resultado).toBe(numero)
            }
        )
    }
)
