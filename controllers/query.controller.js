const { queries } = require('../config/db');
const controller = {}

controller.getQuery1 = async (req, res) => {
    try {
        let result = await queries.query1();
        console.log(result);
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery2 = async (req, res) => {
    try {
        let result = await queries.query2();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery3 = async (req, res) => {
    try {
        let result = await queries.query3();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery5 = async (req, res) => {
    try {
        let result = await queries.query5();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery6 = async (req, res) => {
    try {
        let result = await queries.query6();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery7 = async (req, res) => {
    try {
        let result = await queries.query7();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery8 = async (req, res) => {
    try {
        let result = await queries.query8();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery9 = async (req, res) => {
    try {
        let result = await queries.query9();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery10 = async (req, res) => {
    try {
        let result = await queries.query10();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery11 = async (req, res) => {
    try {
        let result = await queries.query11();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery12 = async (req, res) => {
    try {
        let result = await queries.query12();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery13 = async (req, res) => {
    try {
        let result = await queries.query13();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery14 = async (req, res) => {
    try {
        let result = await queries.query14();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery15 = async (req, res) => {
    try {
        let result = await queries.query15();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery16 = async (req, res) => {
    try {
        let result = await queries.query16();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery17 = async (req, res) => {

    try {
        let result = await queries.query17();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery18 = async (req, res) => {
    try {
        let result = await queries.query18();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery19 = async (req, res) => {
    try {
        let result = await queries.query19();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getQuery20 = async (req, res) => {
    try {
        let result = await queries.query20();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}

// CRUD PAIS
controller.insertPais = async (req, res) => {
    const { nombre, poblacion, area, capital, region} = req.body;
    console.log("BODY",req.body);

    try {
        let result = await queries.insertPais(nombre, poblacion, area, capital, region);
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.deletePais = async (req, res) => {
    const { nombre } = req.body;
    console.log("BODY",req.body);

    try {
        let result = await queries.deletePais(nombre);
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}

// CRUD PREGUNTA
controller.insertPregunta = async (req, res) => {
    const { pregunta, encuesta } = req.body;
    console.log("BODY",req.body);

    try {
        let result = await queries.insertPregunta(pregunta, encuesta);
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.deletePregunta = async (req, res) => {
    const { pregunta } = req.body;
    console.log("BODY",req.body);

    try {
        let result = await queries.deletePregunta(pregunta);
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.updatePregunta = async (req, res) => {
    const { pregunta, encuesta, preguntaNueva } = req.body;
    console.log("BODY",req.body);

    try {
        let result = await queries.updatePregunta(pregunta, encuesta, preguntaNueva);
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getPreguntas = async (req, res) => {
    try {
        let result = await queries.getPreguntas();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}
controller.getPaises = async (req, res) => {
    try {
        let result = await queries.getPaises();
        console.log(result);
        res.status(200).json({
            ok: true,
            result
        })

    } catch (error) {
        console.log(error);
        return res.status
        (400).json({
            ok: false,
            msg: 'Contacte al administrador.'
        })
    }
}




module.exports = {
    controller
}
