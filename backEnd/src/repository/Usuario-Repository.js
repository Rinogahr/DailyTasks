require("dotenv").config();
const {querySync} = require("../../data/connection-mysql");
const jwt = require('jsonwebtoken');
const {
    scrypt,
    randomFill,
    createCipheriv,
} = require("node:crypto");

const CRIPTO_DATA = {
    algoritmo: process.env.DAILY_TASKS_ALG,
    key: process.env.DAILY_TASKS_KEY,
    type: process.env.DAILY_TASKS_TYPE
}

const password = process.env.DAILY_TASKS_KEY;


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

    async jwToken(id){
        let resp = "";
        let queryBase = this.queryBase();

        if(queryBase.length > 0){

        }else{
            return resp = "não foi encontrado o usuário com esse código";
        }
    }

    scrypt(password, 'salt', 24, ( err, key) =>{
        if(err) throw err;

        randomFill( new Uint8Array(16), (err, iv) =>{
            if(err) throw err;

            const cipher = createCipheriv(CRIPTO_DATA.algoritmo,key, iv);
            
            let encrypted = '';
            cipher.setEncoding(CRIPTO_DATA.type);

            cipher.on('data', (chunk) => encrypted += chunk );
            cipher.on('end', () => console.console('encrypted =>', encrypted) );

            cipher.write('some clear text data');
            cipher.end();

        })
    });

    async criptografar(obj){
        const cipher = crypto.createCipher( CRIPTO_DATA.algoritmo, CRIPTO_DATA.key);
        let resposta = {}
        let senhaCripto  = "";
        let queryBase = this.queryBase();

        queryBase += ` WHERE id = ${obj.id}`;

        let result = await querySync(queryBase);

        if(result.length > 0){
            cipher.update(obj.senha)
            senhaCripto = cipher.final(CRIPTO_DATA.type);
            
            
        result.push({
            senhaCripto: senhaCripto
        })
            return resposta = {
                mensage: "conseguisse Rodrigo Cripotografaça legal !",
                usuario: result,
                senhaCripto: senhaCripto
            }
        }


    }

}

module.exports = new UsuarioRepository();