const {querySync} = require("../../data/connection-mysql");

class UsuarioRepository
{

     queryBase(){
        const queryBase =
        `SELECT id, nome
                ,email, sexo
                ,dataNasc, login
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

            }else{
                let newUsuario = await querySync(`
                INSTER INTO usuario ( nome, email, sexo, dataNasc, login, senha)
                values( ${obj.nome}, ${obj.email}, ${obj.sexo}, ${obj.dataNasc}, ${obj.login}, ${obj.senha})`);
            }

        }
    }

}

module.exports = new UsuarioRepository();