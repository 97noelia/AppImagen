import {Request, Response} from 'express';
import pool from '../database';

class UsuariosController{
    index(req:Request, res:Response){
        res.json({'message': 'Estás en usuarios'});
    }

    public async create(req:Request, res:Response){
        const respuesta = await pool.query('insert into usuarios set ?', [req.body]);
        res.json({'mensaje': 'Se ha insertado correctamente'});
    }

    public async read(req:Request, res:Response){
        const usuarios = await pool.query('select * from usuarios', [req.body]);
        res.json(usuarios);
    }

    public async update(req:Request, res:Response){
        await pool.query('update usuarios set ? where id = ?', [req.params.id]);
    }

    public async delete(req:Request, res:Response){
        await pool.query('delete from usuarios where id = ?', [req.params.id]);
    }

    public async readOne(req:Request, res:Response){
        const usuario = await pool.query('select * from usuarios where id = ?', [req.params.id]);
        res.json(usuario);
    }

}

export const usuariosController = new UsuariosController;