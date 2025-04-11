import { describe, it, expect } from 'vitest'
import { Par } from './02-par.js'

describe('Verificar si un número es par', function () {
    it('Given un número par positivo (4), when se verifica, then debe devolver true', function () {
        expect(Par(4)).toBe(true)
    })

    it('Given un número impar positivo (7), when se verifica, then debe devolver false', function () {
        expect(Par(7)).toBe(false)
    })
    
    it('Given un número par negativo (-6), when se verifica, then debe devolver true', function () {
        expect(Par(-6)).toBe(true)
    })

    it('Given cero (0), when se verifica, then debe devolver true', function () {
        expect(Par(0)).toBe(true)
    })
})

// Kata 2: Verificar si un número es par
// Definition Of Done (DoD):

// Given un número par positivo (4), when se verifica, then debe devolver true
// Given un número impar positivo (7), when se verifica, then debe devolver false
// Given un número par negativo (-6), when se verifica, then debe devolver true
// Given cero (0), when se verifica, then debe devolver true
