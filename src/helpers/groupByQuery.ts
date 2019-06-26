export const groupByQuery = [
    '@tpenspecial',
    '@tpdisponibilite',
    '@tpcategorie',
    '@tppays',
    '@tpregion',
    '@tpmillesime',
    '@tpcoteexpertsplitgroup',
    '@tpcepagenomsplitgroup',
    '@tpinventairenomsuccursalesplitgroup',
    '@tpclassification',
    '@tppastilledegout',
    '@tpfamilledevinsplitgroup',
    '@tpaccordsnommenu',
    '@tpparticularitesplitgroup',
    '@tpobservationsgustativesacidite',
    '@tpobservationsgustativescorps',
    '@tpobservationsgustativestannins',
    '@tpobservationsgustativestexture'
].map(field => ({
    field,
    maximumNumberOfValues: 7,
    sortCriteria: 'occurrences'
}));
