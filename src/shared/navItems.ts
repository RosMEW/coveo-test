export const productFields = {
    tpcategorie: { field: 'tpcategorie', value: 'Catégorie' },
    tppays: { field: 'tppays', value: 'Pays' },
    tpregion: { field: 'tpregion', value: 'Région' },
    tpmillesime: { field: 'tpmillesime', value: 'Millésime' },
    tpcoteexpertsplitgroup: {
        field: 'tpcoteexpertsplitgroup',
        value: "Cote d'expert"
    },
    tpcepagenomsplitgroup: { field: 'tpcepagenomsplitgroup', value: 'Cépage' },
    tpclassification: { field: 'tpclassification', value: 'Classification' },
    tpparticularitesplitgroup: {
        field: 'tpparticularitesplitgroup',
        value: 'Particularité'
    },
    tpfamilledevinsplitgroup: {
        field: 'tpfamilledevinsplitgroup',
        value: 'Famille de vin'
    },
    tppastilledegout: { field: 'tppastilledegout', value: 'Pastille de goût' },
    tpobservationsgustativestexture: {
        field: 'tpobservationsgustativestexture',
        value: 'Texture'
    },
    tpobservationsgustativestannins: {
        field: 'tpobservationsgustativestannins',
        value: 'Tannins'
    },
    tpobservationsgustativesacidite: {
        field: 'tpobservationsgustativesacidite',
        value: 'Acidité'
    },
    tpobservationsgustativescorps: {
        field: 'tpobservationsgustativescorps',
        value: 'Corps'
    },
    tpaccordsnommenu: { field: 'tpaccordsnommenu', value: 'Accords suggérés' },
    tpinventairenomsuccursalesplitgroup: {
        field: 'tpinventairenomsuccursalesplitgroup',
        value: 'Succursale'
    },
    tpdisponibilite: { field: 'tpdisponibilite', value: 'Disponibilité' }
};

export const navItems = {
    Catégorie: [productFields.tpcategorie],
    Région: [productFields.tppays, productFields.tpregion],
    Qualité: [
        productFields.tpmillesime,
        productFields.tpcoteexpertsplitgroup,
        productFields.tpcepagenomsplitgroup
    ],
    Caractéristique: [
        productFields.tpclassification,
        productFields.tpparticularitesplitgroup,
        productFields.tpfamilledevinsplitgroup
    ],
    Recommandation: [
        productFields.tpaccordsnommenu,
        productFields.tppastilledegout
    ],
    Gustative: [
        productFields.tpobservationsgustativesacidite,
        productFields.tpobservationsgustativescorps,
        productFields.tpobservationsgustativestannins,
        productFields.tpobservationsgustativestexture
    ],
    Disponibilité: [
        productFields.tpdisponibilite,
        productFields.tpinventairenomsuccursalesplitgroup
    ]
};
