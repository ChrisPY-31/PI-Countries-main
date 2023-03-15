const { Country, Activity } = require("../db");

const createActivity = async (req, res, next) => {
  const { cca3, name, dificulty, duration, temporada } = req.body;
  console.log(cca3, name, dificulty, duration, temporada);
  try {
    //la vas a crear
    const addAct = await Activity.create({
      name,
      dificulty,
      duration,
      temporada,
    });

    const countrieRelation = await Country.findAll({
      where: {
        cca3: cca3,
      },
    });

    const respuesta = await addAct.addCountries(countrieRelation);
    res.status(201).json({ addAct, respuesta });
  } catch (error) {
    next(error);
  }
};

const getAllActivity = async (req, res, next) => {
  const { name } = req.query;
  try {
    if (name) {
      const getActivity = await Activity.findAll({
        include: Country,
        where: {
          name: name,
        },
      });
      return res.status(200).json({ getActivity });
    }
    const getActivity = await Activity.findAll({
      include: Country,
    });
    res.status(200).json({ getActivity });
  } catch (error) {
    next(error);
  }
};

const deleteActivity = async (req, res, next) => {
  const { id } = req.params;
try {
  const activityDelete = await Activity.findByPk(id)
  console.log(activityDelete)
  if(!activityDelete){
    res.status(404).json('error')
  }

  const results = await activityDelete.destroy();
  res.status(200).json(results)
  
} catch (error) {
  next(error)
}

};

module.exports = { createActivity, getAllActivity, deleteActivity };
