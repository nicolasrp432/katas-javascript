// Kata 2: Verificar si un número es par
// Definition Of Done (DoD):

// Given un número par positivo (4), when se verifica, then debe devolver true
// Given un número impar positivo (7), when se verifica, then debe devolver false
// Given un número par negativo (-6), when se verifica, then debe devolver true
// Given cero (0), when se verifica, then debe devolver true

export function Par(numero) {
    return numero % 2 === 0
}
