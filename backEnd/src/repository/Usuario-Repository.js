const {querySync} = require("../../data/connection-mysql");

class UsuarioRepository
{

     queryBase(){
        const queryBase =
        `SELECT id, nome
                ,email, sexo
                ,dataNasc, fone, login
                ,senha, fotoId
        FROM usuario`;

        return queryBase;
    }

    async usuarioFindAll(){
        const list = await querySync(this.queryBase());


        return list;
    }

    async usuarioFindOneById(params){
        let query = this.queryBase();

        query += `
         WHERE id = ${params}`;

        let resultBd = await querySync(query);

        if(resultBd.length > 0){
            return resultBd = {
                status: true,
                mensage: "Consulta bem sucedida!",
                resultBd: resultBd
            }
        }else{
            return resultBd = {
                status: false,
                mensage: "Não foi encontrado usuário com esses valores",
                resultBd: resultBd
            }
        }

    }

    async createNewUsuario(obj){
        let result = {};
        let queryBase = this.queryBase();

        queryBase += ` where email = '${obj.email}' `;

        let resultBD = await querySync(queryBase);

        if(resultBD.length > 0){//EXISTE UM USUÁRIO CADASTRADO COM ESSE E-MAIL
            return resultBD = {
                status: false,
                mensagen: "Não foi possivel cadastrar, pois já existe um usuário com esse e-mail",
                resultBD: resultBD
            }
        }else{

            if(obj.senha != obj.repeteSenha){
                return resultBD = {
                    status: false,
                    mensagen: "senha e Repetir Senha não são as mesmas"
                }
            }else{
                let newUsuario = await querySync("insert into usuario (nome, sexo, dataNasc, email, fone, login, senha, fotoId) values (?,?,?,?,?,?,?,?)",
                [
                    obj.nome,
                    obj.sexo,
                    obj.dataNasc,
                    obj.email,
                    obj.fone ? obj.fone : null,
                    obj.login,
                    obj.senha,
                    null
                ]);
                if(newUsuario.affectedRows > 0){
                    return result = {
                        result: newUsuario,
                        status: true,
                        mensage: "Usuário gravado com sucesso!",
                      };
                }else{
                    return result = {
                        result: newUsuario,
                        status: false,
                        mensage: "nao foi possivel gravar",
                      };
                }
            }

        }
    }

}

module.exports = new UsuarioRepository();