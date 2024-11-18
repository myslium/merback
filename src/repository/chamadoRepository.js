import connection from "./connection.js";


export async function chamandoChamada() {
    const con = `
        SELECT * FROM Chamado
    `;

    let [resultado] = await connection.query(con);
    return resultado;
}


export async function chamandoChamadaPorNome(titulo) {
    const con = `
        SELECT * FROM Chamado
        WHERE Título LIKE ?
    `;

    let [resultado] = await connection.query(con, [`%${titulo}%`]);
    return resultado;
}

export async function inserirChamada(chamado) {
    const con = `
        INSERT INTO Chamado (Título, Informacoes, Impacto, Data_da_Ocorrência, Atribuir)
        VALUES (?, ?, ?, ?, ?)
    `;

    let [resultado] = await connection.query(con, [
        chamado.titulo,
        chamado.informacoes,
        chamado.impacto,
        chamado.data_da_ocorrencia,
        chamado.atribuir,
    ]);
    return resultado.insertId;
}


export async function alterarChamada(chamado, id) {
    const con = `
        UPDATE Chamado
        SET Título = ?,
            Informacoes = ?,
            Impacto = ?,
            Data_da_Ocorrência = ?,
            Atribuir = ?
        WHERE id = ?
    `;

    let [resultado] = await connection.query(con, [
        chamado.titulo,
        chamado.informacoes,
        chamado.impacto,
        chamado.data_da_ocorrencia,
        chamado.atribuir,
        id,
    ]);
    return resultado.affectedRows;
}


export async function deletarChamada(id) {
    const con = `
        DELETE FROM Chamado
        WHERE id = ?
    `;

    let [resultado] = await connection.query(con, [id]);
    return resultado.affectedRows;
}
