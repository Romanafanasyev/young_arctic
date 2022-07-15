export const DATA_questions = [
    {
        name: 'Легко знакомлюсь с людьми',
        worker_type: 4
    },
    {
        name: 'skip',
        worker_type: -1
    },
    {
        name: 'Охотно и подолгу могу что-нибудь мастерить',
        worker_type: 1
    },
    {
        name: 'skip',
        worker_type: -1
    },
    {
        name: 'Люблю ходить в музеи, театры, на выставки',
        worker_type: 3
    },
    {
        name: 'skip',
        worker_type: -1
    },
    {
        name: 'Охотно и постоянно ухаживаю за растениями, животными',
        worker_type: 0
    },
    {
        name: 'skip',
        worker_type: -1
    },
    {
        name: 'Охотно и подолгу могу что-нибудь вычислять, чертить',
        worker_type: 2
    },
    {
        name: 'skip',
        worker_type: -1
    },
    {
        name: 'С удовольствием общаюсь со сверстниками или малышами',
        worker_type: 4
    },
    {
        name: 'skip',
        worker_type: -1
    },
    {
        name: ' С удовольствием ухаживаю за растениями и животными',
        worker_type: 0
    },
    {
        name: 'skip',
        worker_type: -1
    },
    {
        name: ' Обычно делаю мало ошибок в письменных работах',
        worker_type: 2
    },
    {
        name: 'skip',
        worker_type: -1
    },
    {
        name: 'Мои изделия обычно вызывают интерес у товарищей, старших',
        worker_type: 1
    },
]

export const DATA_answers = [
    {
        id: '0',
        name: 'Согласен',
        value: 1
    },
    {
        id: '1',
        name: 'Не уверен',
        value: 0
    },
    {
        id: '2',
        name: 'Не согласен',
        value: -1
    },
]

export const DATA_types = [
    {
        id:0,
        name:"Человек-природа",
        description:"Специалист должен не просто\n" +
            "все знать о живых организмах, но и прогнозировать возможные изменения в них и принимать\n" +
            "меры. От человека требуется инициатива и самостоятельность в решении конкретных задач,\n" +
            "заботливость, терпение и дальновидность. Человек, работающий в сфере «человек-природа»,\n" +
            "должен быть спокойным и уравновешенным;",
        jobs: ["Врач", "Ветеринар"]
    },
    {
        id:1,
        name:"Человек-техника",
        description:"Техническая фантазия, способность мысленно соединять\n" +
            "и разъединять технические объекты и их части — важные условия для успеха в данной области",
        jobs: ["Инженер","Программист"]
    },
    {
        id:2,
        name:"Человек-знаковая система",
        description:"Cпециалисту, который работает со знаками, важно уметь с одной стороны, абстрагироваться от\n" +
            "реальных физических, химически, механических свойств предметов, а с другой — представлять и\n" +
            "воспринимать характеристики реальных явлений или объектов, стоящих за знаками",
        jobs: ["Математик","Физик"]
    },
    {
        id:3,
        name:"Человек-искусство",
        description:"Важнейшие требования, которые предъявляют профессии, связанные с изобразительной,\n" +
            "музыкальной, литературно-художественной, актерско-сценической деятельностью человека —\n" +
            "наличие способности к искусствам, творческое воображение, образное мышление, талант,\n" +
            "трудолюбие.",
        jobs: ["Художник","Дизайнер"]
    },
    {
        id:4,
        name:"«Человек-человек",
        description:" Главное\n" +
            "содержание труда в профессиях типа «человек-человек» сводится к взаимодействию между\n" +
            "людьми",
        jobs: ["Волонтер","Менеджер"]
    }]

export const DATA_jobs = [
    [
        {
            name: "Санитар",
            salary: "15 000р",
            description: "Помощник врача"
        },
        {
            name: "Педиатр",
            salary: "25 000р",
            description: "Лечит детей"
        }
    ],
    [
        {
            name: "Инженер-электрик",
            salary: "15 000р",
            description: "Чинит свет"
        },
        {
            name: "Старший инженер",
            salary: "25 000р",
            description: "Командует инженерами"
        }
    ],
    [
        {
            name: "Санитар",
            salary: "15 000р",
            description: "Помощник врача"
        },
        {
            name: "Педиатр",
            salary: "25 000р",
            description: "Лечит детей"
        }
    ],
    [
        {
            name: "Санитар",
            salary: "15 000р",
            description: "Помощник врача"
        },
        {
            name: "Педиатр",
            salary: "25 000р",
            description: "Лечит детей"
        }
    ],
    [
        {
            name: "Санитар",
            salary: "15 000р",
            description: "Помощник врача"
        },
        {
            name: "Педиатр",
            salary: "25 000р",
            description: "Лечит детей"
        }
    ]
]