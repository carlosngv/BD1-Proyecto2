const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 10,
  password: '7Dejunio',
  user: 'root',
  database: 'proyecto2',
  host: 'localhost',
  port: '3306',
  multipleStatements: true
});

const queries = {}


queries.query1 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    select p.nombre, count(*) as inventos
    from asigna_invento ai
    inner join profesional p on p.id = ai.id_profesional
    inner join invento i on i.id = ai.id_invento
    group by p.nombre
    order by inventos desc;
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query2 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    select r.nombre, p.nombre, count(*) as preguntas_contestadas from pais p
    inner join pais_respuesta pr on pr.id_pais = p.id
    inner join region r on r.id = p.id_region
    group by p.nombre
    order by preguntas_contestadas desc;

    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query3 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    select nombre, area, 0 as inventores
    from pais
    where pais.id not in (
      select id_pais from inventor
    )
    and id in (
      select id_pais1 from frontera
        where id_pais1 = id
        and id_pais2 is null
    )
    order by nombre asc;

    select * from frontera;
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query5 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    select p.nombre, a.nombre as area, avg(p.salario) as promedio_salario  from profesional p
    inner join profe_area pa on pa.id_profesional = p.id
    inner join ar a on a.id = pa.id_area
    where p.salario > (
      select avg(p.salario) from profesional p
      inner join profe_area pa on pa.id_profesional = p.id
      inner join ar a on a.id = pa.id_area
        group by a.nombre LIMIT 1
    )
    group by a.nombre, p.nombre;

    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query6 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    select p.nombre, rc.id_pregunta, rc.id_respuesta, count(*) as cantidad_correctas from pais p
    inner join pais_respuesta pr on pr.id_pais = p.id
    inner join respuesta r on r.id = pr.id_respuesta
    inner join respuesta_correcta rc on rc.id_respuesta = r.id
    inner join pregunta pre on pre.id = rc.id_pregunta
    group by p.nombre
    order by cantidad_correctas desc;
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query7 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    select p.nombre, a.nombre, i.nombre from profesional p
    inner join profe_area pa on pa.id_profesional = p.id
    inner join ar a on a.id = pa.id_area
    inner join asigna_invento ai on ai.id_profesional = p.id
    inner join invento i on i.id = ai.id_invento
    where a.nombre = "Òptica";
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query8 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    select substring(p.nombre, 1, 1) as letra, sum(p.area) as suma from pais p
    group by letra
    order by letra asc;
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query9 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    select i.nombre, inventor.nombre  as inicial from invento i
    inner join inventado  on inventado.id_invento = i.id
    inner join inventor on inventor.id = inventado.id_inventor
    where substring(inventor.nombre,1,2) = "Be";
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query10 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    select i.nombre as invento, inventor.nombre as inventor, i.anio from invento i
    inner join inventado  on inventado.id_invento = i.id
    inner join inventor on inventor.id = inventado.id_inventor
    where substring(inventor.nombre,1,1) like 'B%' and(
    substring(inventor.nombre,length(inventor.nombre)) like '%r'
    or  substring(inventor.nombre,length(inventor.nombre)) like '%n' )
    and i.anio < 1900;
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query11 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    SELECT pais.id, pais.nombre,count(*) as total_fronteras, pais.area AS area FROM frontera
    INNER JOIN pais as pais
    ON frontera.id_pais1 = pais.id
    AND frontera.id_pais2 IS NOT NULL
    GROUP BY frontera.id_pais1
    HAVING (count(*) > 7)
    ORDER BY area DESC;
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query12 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    SELECT * FROM invento
    WHERE char_length(nombre) < 4 AND nombre LIKE 'L%';
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query13 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    SELECT id, nombre, salario as salario_base, comision, (salario + comision) as salario_total FROM profesional
    WHERE comision > (0.24 * salario);
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query14 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    SELECT encuesta.nombre, count(*) as paises FROM pais_respuesta
    INNER JOIN respuesta
    ON pais_respuesta.id_respuesta = respuesta.id
    INNER JOIN pregunta
    ON respuesta.id_pregunta = pregunta.id
    INNER JOIN encuesta
    ON pregunta.id_encuesta = encuesta.id
    INNER JOIN pais
    ON pais_respuesta.id_pais = pais.id
    INNER JOIN region
    ON pais.id_region = region.id
    GROUP BY encuesta.nombre;
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}

queries.query15 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    SELECT id, nombre, poblacion FROM pais
    WHERE pais.poblacion >
    (
    SELECT sum(pais.poblacion) FROM pais
    INNER JOIN region
    ON pais.id_region = region.id
    AND region.nombre = 'Centro America'
    );
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query16 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    SELECT profesional.nombre, ar.nombre as area, ar.ranking FROM ar
    INNER JOIN profesional
    ON ar.idjefe = profesional.id
    AND ar.nombre NOT IN
    (
    SELECT DISTINCT ar.nombre AS AREA
    FROM asigna_invento
    INNER JOIN profesional
    ON asigna_invento.id_profesional = profesional.id
    INNER JOIN profe_area
    ON profesional.id = profe_area.id_profesional
    INNER JOIN ar
    ON profe_area.id_area = ar.id
    INNER JOIN invento
    ON asigna_invento.id_invento = invento.id
    INNER JOIN inventado
    ON invento.id = inventado.id_invento
    INNER JOIN inventor
    ON inventado.id_inventor = inventor.id
    AND inventor.nombre = 'Pasteur'
    )
    AND ar.nombre != 'TODAS'
    AND ar.idjefe IS NOT NULL;
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query17 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    SELECT nombre, anio FROM invento
    WHERE anio in
    (
    SELECT anio FROM inventado
    INNER JOIN invento
    ON inventado.id_invento = invento.id
    INNER JOIN inventor
    ON inventado.id_inventor = inventor.id
    AND inventor.nomBre = 'BENZ'
    );

    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query18 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    SELECT pais.id, pais.nombre, pais.poblacion FROM frontera
    INNER JOIN pais
    ON frontera.id_pais1 = pais.id
    WHERE NORTE = "" AND SUR = "" AND ESTE = "" AND OESTE = ""
    AND frontera.id_pais2 IS NULL
    AND pais.area >=
    (SELECT area FROM pais WHERE nombre = 'Japon');
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query19 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    SELECT DISTINCT pais1.nombre AS pais, pais2.nombre AS frontera_con FROM frontera
    INNER JOIN pais pais1
    ON frontera.id_pais1 = pais1.id
    INNER JOIN pais pais2
    ON frontera.id_pais2 = pais2.id;
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.query20 = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    SELECT id, nombre, salario as base, comision, (salario + comision) as salario_total FROM profesional
    WHERE salario > (2 * comision)
    AND comision > 0;

    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}


// CRUD PAIS

queries.insertPais = (nombre, poblacion, area, capital, region) => {
  return new Promise((resolve, reject) => {
    pool.query(`
    insert into pais(nombre, poblacion, area, capital, id_region)
    values('${nombre}', ${poblacion}, ${area}, '${capital}',(select id from region where nombre = '${region}'));
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.deletePais = (nombre) => {
  return new Promise((resolve, reject) => {
    pool.query(`
    delete from pais where nombre like '${nombre}';
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.getPaises = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
    select nombre, poblacion, area, capital from pais;
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}


// CRUD Pregunta
queries.getPreguntas = (pregunta, encuesta) => {
  return new Promise((resolve, reject) => {
    pool.query(`
    select pregunta, (
      select nombre from encuesta where id = id_encuesta
    ) as encuesta from pregunta;
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.insertPregunta = (pregunta, encuesta) => {
  return new Promise((resolve, reject) => {
    pool.query(`
    insert into pregunta(pregunta, id_encuesta)
    values('${pregunta}',(select id from encuesta where nombre like '${encuesta}'));
    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.deletePregunta = (pregunta) => {
  return new Promise((resolve, reject) => {
    pool.query(`
    delete from pregunta where pregunta like '${pregunta}';

    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}
queries.updatePregunta = (pregunta, encuesta, preguntaNueva) => {
  return new Promise((resolve, reject) => {
    pool.query(`
    UPDATE pregunta
    SET
      pregunta = '${preguntaNueva}',
      id_encuesta = (
      select id from encuesta where nombre like '${encuesta}'
      )
    WHERE
      pregunta like '${pregunta}';

    `, (err, res) => {
      if(err) {
        reject(err)
      }
      return resolve(res);
    });
  });
}

module.exports = {
  queries
}
