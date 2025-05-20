import { alibis } from './alibis.js';
import { indices } from './indices.js';
import { personnagesParEpoque } from './personnages.js';
import { lieuxParEpoque } from './lieux.js';
import { armesParEpoque } from './armes.js';
import { secrets } from './secret.js';
import { liensAvecVictime } from './liensavecvictime.js';
import { mobiles } from './mobiles.js';

// Harmonisation de la casse pour "renaissance" dans personnagesParEpoque
const personnagesRenaissance = personnagesParEpoque.renaissance || personnagesParEpoque.Renaissance;

// Structure univers complète
const univers = {
  medieval: {
    alibis: alibis.medieval,
    indices: indices.medieval,
    personnages: personnagesParEpoque.medieval,
    lieux: lieuxParEpoque.medieval,
    armes: armesParEpoque.medieval,
    secrets: secrets.medieval,
    liensAvecVictime: liensAvecVictime.medieval,
    mobiles: mobiles.medieval
  },
  victorien: {
    alibis: alibis.victorien,
    indices: indices.victorien,
    personnages: personnagesParEpoque.victorien,
    lieux: lieuxParEpoque.victorien,
    armes: armesParEpoque.victorien,
    secrets: secrets.victorien,
    liensAvecVictime: liensAvecVictime.victorien,
    mobiles: mobiles.victorien
  },
  futuriste: {
    alibis: alibis.futuriste,
    indices: indices.futuriste,
    personnages: personnagesParEpoque.futuriste,
    lieux: lieuxParEpoque.futuriste,
    armes: armesParEpoque.futuriste,
    secrets: secrets.futuriste,
    liensAvecVictime: liensAvecVictime.futuriste,
    mobiles: mobiles.futuriste
  },
  western: {
    alibis: alibis.western,
    indices: indices.western,
    personnages: personnagesParEpoque.western,
    lieux: lieuxParEpoque.western,
    armes: armesParEpoque.western,
    secrets: secrets.western,
    liensAvecVictime: liensAvecVictime.western,
    mobiles: mobiles.western
  },
  contemporain: {
    alibis: alibis.contemporain,
    indices: indices.contemporain,
    personnages: personnagesParEpoque.contemporain,
    lieux: lieuxParEpoque.contemporain,
    armes: armesParEpoque.contemporain,
    secrets: secrets.contemporain,
    liensAvecVictime: liensAvecVictime.contemporain,
    mobiles: mobiles.contemporain
  },
  renaissance: {
    alibis: alibis.renaissance,
    indices: indices.renaissance,
    personnages: personnagesRenaissance,
    lieux: lieuxParEpoque.renaissance,
    armes: armesParEpoque.renaissance,
    secrets: secrets.renaissance,
    liensAvecVictime: liensAvecVictime.renaissance,
    mobiles: mobiles.renaissance
  },
  historique: {
    alibis: alibis.historique,
    indices: indices.historique,
    personnages: personnagesParEpoque.historique,
    lieux: lieuxParEpoque.historique,
    armes: armesParEpoque.historique,
    secrets: secrets.historique,
    liensAvecVictime: liensAvecVictime.historique,
    mobiles: mobiles.historique
  }
  // Ajoute ici d'autres époques si besoin
};

export default univers;
