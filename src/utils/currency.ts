export const formatoReal = (valor: number): string => {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}