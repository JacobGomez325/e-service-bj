<template>
  <div class="bg-gray-50 ">
   <!-- <navbar :allData="allData" :searchQuery="searchQuery"></navbar> -->
    <div class="bg-gray-900">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <nuxt-link to="/" aria-label="logo" title="logo" class="inline-flex items-center">
            <img src="/img/logo.png" width="120px" height="35px" alt="">
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">Plateformes & Services</span>
          </nuxt-link>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <form  @submit.prevent="recherche">
              <div class="pt-2 relative mx-auto text-gray-600">
                <input v-model.lazy.trim="searchQuery" required @keyup.enter="recherche" class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Rechercher un service">
                <button type="submit" class="bg-blue-500 text-sm shadow-sm rounded-lg px-5 py-1 text-center h-10 font-semibold text-white">Rechercher</button>
              </div>
            </form>
          </ul>
          <div class="lg:hidden">
            <button aria-label="Open Menu" title="Open Menu" class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline" @click="isMenuOpen = true">
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                ></path>
              </svg>
            </button>
            <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      @click="isMenuOpen = false"
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <form @submit.prevent="recherche">
                      <div class="pt-2 relative mx-auto text-gray-600">
                        <input v-model="searchQuery" @keyup.enter="save" class="border-2 border-gray-300 bg-white h-10 px-5 pl-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Rechercher un service">
                        <button type="submit" class="bg-blue-500 h-10 text-sm shadow-sm rounded-lg px-5 py-1 text-center font-semibold text-white">Rechercher</button>
                      </div>
                     
                    </form>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="is_recherche" class="container my-6">
      <div class="flex justify-center">
        <h1 class=" text-4xl  font-bold border-b-8  border-primary py-2 uppercase ">Plateformes et e-Services</h1>
      </div>
      <main class="relative px-4 py-16 my-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
            <svg viewBox="0 0 88 88" class="w-full max-w-screen-xl text-indigo-100">
              <circle fill="currentColor" cx="44" cy="44" r="15.5"></circle>
              <circle fill-opacity="0.2" fill="currentColor" cx="44" cy="44" r="44"></circle>
              <circle fill-opacity="0.2" fill="currentColor" cx="44" cy="44" r="37.5"></circle>
              <circle fill-opacity="0.3" fill="currentColor" cx="44" cy="44" r="29.5"></circle>
              <circle fill-opacity="0.3" fill="currentColor" cx="44" cy="44" r="22.5"></circle>
            </svg>
        </div>
        <div v-for="data in allData1" :key="data.id">
          <titre>{{data.title}}</titre>
          <div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 my-4">
            <div v-for="service in data.services" :key="service.id">
              <card>
                <p slot="title" class="mb-2 font-bold"> {{service.service}} </p>
                <p slot="description" class="text-sm leading-5 text-justify  text-gray-900 h-full" >
                  {{service.description.substring(0,120)}} <span class=" cursor-pointer font-black text-xl px-1 rounded-md" v-if="service.description.length > 120" :title="service.description" >...</span>
                  <a class="bg-blue-500 text-white px-2 flex justify-between items-center absolute bottom-2 left-1 py-1 outline-none rounded-sm shadow-sm focus:outline-none" target="_blank" :href="service.link">
                    Consultez le site
                    <span class="mx-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></span>
                  </a>
                </p>
              </card>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div v-else class="container my-6">
      
      <div class="flex flex-col items-center justify-center">
        <h1 class=" text-4xl  font-bold border-b-8  border-primary py-2 uppercase ">Resultats trouvée ({{resultQuery.length}}) !  </h1>
        <h3 v-if="resultQuery.length != 0" class="text-xl font-semibold my-2">Cliquez <span @click="is_recherche = true" class="px-1 cursor-pointer text-2xl font-black underline ">ici</span> pour voir tous les services</h3>
      </div>
      <main class="relative px-4  py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div v-if="resultQuery.length != 0" class="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
            <svg viewBox="0 0 88 88" class="w-full max-w-screen-xl text-indigo-100">
              <circle fill="currentColor" cx="44" cy="44" r="15.5"></circle>
              <circle fill-opacity="0.2" fill="currentColor" cx="44" cy="44" r="44"></circle>
              <circle fill-opacity="0.2" fill="currentColor" cx="44" cy="44" r="37.5"></circle>
              <circle fill-opacity="0.3" fill="currentColor" cx="44" cy="44" r="29.5"></circle>
              <circle fill-opacity="0.3" fill="currentColor" cx="44" cy="44" r="22.5"></circle>
            </svg>
        </div>
        <div v-if="resultQuery.length != 0">
          <div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 my-4">
            <div v-for="service in resultQuery" :key="service.id">
              <card>
                <p slot="title" class="mb-2 font-bold text-primary"> {{service.service}} </p>
                <p slot="description" class="text-sm leading-5 text-justify  text-gray-900 h-full" >
                  {{service.description.substring(0,120)}} <span class=" cursor-pointer font-black text-xl px-1 rounded-md" v-if="service.description.length > 120" :title="service.description" >...</span>
                  <a class="bg-blue-500 text-white px-2 flex justify-between items-center absolute bottom-2 left-1 py-1 outline-none rounded-sm shadow-sm focus:outline-none" target="_blank" :href="service.link">
                    Consultez le site
                    <span class="mx-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></span>
                  </a>
                </p>
              </card>
            </div>
        </div>
        </div>
        <div v-else>
          <div class="justify-center">
            <center class=" m-auto">
            <svg class="emoji-404 " enable-background="new 0 0 226 249.135" height="220" id="Layer_1" overflow="visible" version="1.1" viewBox="0 0 226 249.135" width="215" xml:space="preserve" ><circle cx="113" cy="113" fill="#FFE585" r="109"/><line enable-background="new    " fill="none" opacity="0.29" stroke="#6E6E96" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="88.866" x2="136.866" y1="245.135" y2="245.135"/><line enable-background="new    " fill="none" opacity="0.17" stroke="#6E6E96" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="154.732" x2="168.732" y1="245.135" y2="245.135"/><line enable-background="new    " fill="none" opacity="0.17" stroke="#6E6E96" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="69.732" x2="58.732" y1="245.135" y2="245.135"/><circle cx="68.732" cy="93" fill="#6E6E96" r="9"/><path d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z" enable-background="new    " fill="#FF9900" opacity="0.24"/><circle cx="156.398" cy="93" fill="#6E6E96" r="9"/><ellipse cx="67.732" cy="140.894" enable-background="new    " fill="#FF0000" opacity="0.18" rx="17.372" ry="8.106"/><ellipse cx="154.88" cy="140.894" enable-background="new    " fill="#FF0000" opacity="0.18" rx="17.371" ry="8.106"/><path d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z" fill="#FFEFB5"/><circle cx="113" cy="113" fill="none" r="109" stroke="#6E6E96" stroke-width="8"/></svg>
            <div class=" tracking-widest mt-4">
            <span class="text-gray-500 text-6xl block"><span>4  0  4</span></span>
            <span class="text-gray-500 text-xl">Désole aucun service trouvé !</span>

            </div>
            </center>
            <center class="mt-6">
            <span  @click="is_recherche = true" class="text-gray-500 font-mono cursor-pointer text-xl bg-gray-200 p-3 rounded-md hover:shadow-md">Cliquez ici pour voir tous les services </span>
            </center>
          </div>
        </div>
      </main>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_recherche:true,
      isMenuOpen: false,
      allData:[
        {
          services:[
            {service:"Attestation de Non-Faillite",description:"Ce service permet d'obtenir une attestation de non-faillite d'une entreprise non radiée.",link:"https://service-public.bj/public/services/service/PS00349"},
            {service:"Délivrance du Casierjudiciaire (Extrait B3 ducasier judiciaire)",description:"Ce service permet à tout citoyen béninois, tout étranger résidant ou ayant résidé au Bénin de demander un extrait B3 de son casier judiciaire.",link:"https://service-public.bj/public/services/service/PS00373"},
            {service:"Délivrance du Certificat de Nationalité",description:"Délivrance du certificat de nationalité au demandeur pour lui permettre de prouver sa citoyenneté",link:"https://service-public.bj/public/services/service/PS00373"}
          ],
          title:"Justice et Législation"
        },
        
        {
          services:[
            {service:"Délivrance de passeport de service",description:"Délivrance de passeports de service au profit des citoyens qualifiés.",link:"https://service-public.bj/public/services/service/PS00051"},
            {service:"Délivrance de passeport diplomatique",description:"Délivrance de passeport diplomatique au profit des citoyens qualifiés",link:"https://service-public.bj/public/services/service/PS00051"},
            {service:"Délivrance de visa électronique (e-visa)",description:"Ce service permet à tout étranger désireux de visiter la République du Bénin de soumettre sa demande de visa en ligne",link:"https://evisa.gouv.bj/fr/"},
          ],
          title:"Affaires étrangères"
        },
        {
          services:[
            {service:"État descriptif",description:"Document qui renseigne sur les caractéristiques (propriétaire, nature, situation, lieu, contenance, inscriptions, etc.) d’un titre de propriété à un instant précis.",link:"https://enotaire.andf.bj/"},
            {service:"Extrait de plan cadastral d'une parcelle",description:"Document qui renseigne sur les caractéristiques (propriétaire, nature, situation, lieu, contenance, inscriptions, etc.) d’un titre de propriété à un instant précis.",link:"https://enotaire.andf.bj/"},
            {service:"Attestation de confirmation cadastrale",description:"Attestation de confirmation cadastrale",link:"http://services.andf.bj/commande/1"},
            {service:"Coordonnées géographiques des sommets d'une parcelle",description:"Ce service fournit les Coordonnées géographiques des sommets d'une parcelle.",link:"http://services.andf.bj/commande/4"},
            {service:"Extrait de l'ortho photographie aérienne de",description:"Extrait de l'ortho photographie aérienne de résolution 20 cm",link:"http://services.andf.bj/commande/2"},
            {service:"Extrait de plan parcellaire",description:"Extrait de plan cadastral d'une parcelle.",link:"http://services.andf.bj/commande/5"},
            {service:"Extrait de plan parcellaire numérique géo-référencé",description:"Ce service fournit l'extrait de plan parcellaire numérique géo-référencé.",link:"http://services.andf.bj/commande/6"},
            {service:"Identité et adresse du propriétaire d'une parcelle",description:"Ce service fournit l'identité et l'adresse du propriétaire d'une parcelle.",link:"http://services.andf.bj/commande/3"},
            {service:"Inscription (Service permettant d’effectuer les opérations de Mutations,hypothèques,morcellements,radiations,etc.sur un titre foncier)",description:"Service permettant d’effectuer les opérations de Mutations, hypothèques, morcellements, radiations, etc. sur un titre foncier",link:"https://enotaire.andf.bj/"},
            {service:"Accès aux indicateurs « FAIRE DES AFFAIRES »",description:"Permet d’accéder aux informations sur le climat des affaires au Bénin",link:"https://doingbusinessinbenin.com/"},
            {service:"Autorisation de Change pour Remboursement d’emprunt",description:"Autorisation accordée à toute personnephysique ou morale pour remboursement d’emprunt",link:"https://guce.gouv.bj/?lang=fr"},
            {service:"Autorisation de Change pour Règlement par avance de fret",description:"Autorisation accordée à toute personne physique ou morale pour règlement par avance de fret",link:"https://guce.gouv.bj/?lang=fr"},
            {service:"Autorisation de Change pour Règlement après prestation de fret",description:"Autorisation accordée à toute personne physique ou morale pour Règlement après prestation de fret",link:"https://guce.gouv.bj/?lang=fr"},
            {service:"Autorisation de Change pour Règlement après réception de marchandises de fournisseur de vivres frais, de friperies, de médicaments et de réactifs de laboratoires",description:"Autorisation accordée à toute personne physique ou morale désireuse de transférer des frais pour règlement après réception de marchandises de fournisseur de vivres frais, de friperies, de médicaments et de réactifs de laboratoires",link:"https://guce.gouv.bj/?lang=fr"},
            {service:"Autorisation de Change pour Règlement de fournisseur de marchandises d’un montant inférieur à 3.000.000 FCFA",description:"Autorisation accordée à toute personne physique ou morale pour Règlement de fournisseur de marchandises d’un montant inférieur à 3.000.000 FCFA:",link:"https://guce.gouv.bj/?lang=fr"},
            {service:"Autorisation de Change pour Règlement de fournisseur de véhicules d’occasion",description:"Autorisation accordée à toute personne physique ou morale pour règlement de fournisseur de véhicules d’occasion",link:"https://guce.gouv.bj/?lang=fr"},
            {service:"Autorisation de Change pour Règlement de frais de scolarité (1ère inscription)",description:"Autorisation accordée à toute personne physique ou morale désireuse de transférer des frais de scolarité à un bénéficiaire à l'extérieur.",link:"https://guce.gouv.bj/?lang=fr"},
            {service:"Déclaration d'impôts",description:"Déclaration et paiement des impôts",link:"https://eservices.impots.bj/login?returnUrl=%2Fhome"},
            {service:"Délivrance de bulletins de paye aux agents de l'Etat",description:"Mise en ligne de bulletin de paie des agents civils et militaires de l’Etat. Diffusion mensuelle parallèlement dans les boîtes électroniques des agents.",link:"https://equittancetresor.finances.bj:9051/"},
            {service:"Délivrance de quittance informatisée",description:"Délivrance de quittance de versement.",link:"https://equittancetresor.finances.bj:9051/"},
            {service:"Dépôt de bilan",description:"Dépôt et traitement des états financiers",link:"https://ebilan.impots.bj/"},
            {service:"Micro Crédit Mobile",description:"Octroi de Micro-crédit via la plateforme de finance digitale",link:"https://fnm.sygmacarmes.com/"},
            {service:"Rapportage automatique de la mise en œuvre des actions et reformes",description:"Ce service permet de générer de manière automatique les statistiques et les rapports permettant de renseigner sur le niveau de mise en œuvre des actions de réforme.",link:"https://reformes-ugr.finances.bj/"},
            {service:"Immatriculation des contribuables de la DGI / IFU",description:"L'immatriculation permet d’attribuer un numéro unique aux personnes physiques et morales redevables de divers impôts.",link:"https://www.service-public.bj/public/services/service/PS00402"},
            {service:"Extrait de plan cadastral d'une parcelle",description:"Extrait de plan cadastral d'une parcelle.",link:"http://services.andf.bj/commande/1"},
            {service:"Attestation de prise en charge pour les agents admis à la retraite",description:"Pièce attestant que l’intéressé jouit de sa pension de retraite sur le FNRB",link:"https://www.service-public.bj/public/services/service/PS00004"},
            {service:"Attestation d’affiliation au FNRB",description:"Pièce attestant que l’intéressé cotise au FNRB",link:"https://www.service-public.bj/public/services/service/PS00002"},
            {service:"Attestation de jouissance de droits à une pension de retraite",description:"Pièce attestant que l’intéressé jouit de sa pension de retraite au FNRB",link:"https://www.service-public.bj/public/services/service/PS00003"},
            {service:"Calcul des droits et taxes applicables",description:"Simulation du calcul des droits et taxes payables au cordon douanier",link:"https://guce.gouv.bj/taxation-simulation/?navbarActive=services"},
            {service:"Accès aux marchés publics",description:"Permet de consulter les appels d'offre et de soumissionner aux marchés publics à travers la plate-forme commune d'échange entre les acheteurs publics et les fournisseurs",link:"https://www.marches-publics.bj/"},
            {service:"Répertoire des prix de référence",description:"Mercurial des prix pour la commande publique.",link:"https://controlefinancier.bj/repertoire/recherche/prix"},
            {service:"Délivrance de bulletins de paye aux agents de l'Etat",description:"Mise en ligne de bulletin de paie des agents civils et militaires de l’Etat. Diffusion mensuelle parallèlement dans les boîtes électroniques des agents.",link:"https://www.bulletinpaie.finances.bj:8443/login"}
          ],
          title:"Economie Finances"
        },
        {
          services:[
            {service:"Délivrance de passeport ordinaire biométrique",description:"Le passeport ordinaire biométrique béninois est un document de voyage délivré aux personnes ayant la nationalité béninoise.",link:"https://service-public.bj/public/services/service/PS00328" },
            {service:"Vérification du statut de la demande de passeport (ordinaire) ",description:"Ce service permet à l'usager de vérifier en ligne le statut de sa demande de passeport",link:"https://service-public.bj/public/services/service/PS00329"},
          ],
          title:"Intérieur et Sécurité Publique"
        },
        {
          services:[
            {service:"Certificat de Conformité Environnementale et Sociale",description:"Le Certificat de Conformité Environnementale est une attestation délivrée pour confirmer la faisabilité environnementale d’un projet.",link:"https://service-public.bj/public/services/service/PS00006"},
            {service:"Permis de construire ",description:"Le permis de construire est une décision administrative qui autorise, sur la base des règles d’urbanisme, de constructions nouvelles, la modification de travaux de construction non achevés, la régularisation de travaux de construction d’un ouvrage entrepris sans autorisation.",link:"https://service-public.bj/public/services/service/PS00141"},
          ],
          title:"Cadre de Vie et Développement Durable"
        },
        {
          services:[
            {service:"Enregistrement des ONG et associations ",description:"Délivrance du récépissé de déclaration des associations, des Organisations Non Gouvernementale et autres structures de type associatif ",link:"https://service-public.bj/public/services/service/PS00073"},
          ],
          title:"Décentralisation, Gouvernance Locale"
        },
        {
          services : [
            {service:"Consultation en ligne des actes de carrière ",description:"Permet à l’usager agent de l’État d’accéder : sa dernière situation administrative ;ses lignes carrière ;ses informations bordereau de mandatement transmis au Ministère de l’Économie et des Finances.",link:"https://service-public.bj/public/services/service/PS00028"},
            {service:"Enregistrement et suivi du traitement des requêtes et des plaintes des usagers du ministère du travail (Volet mataccueil)",description:"Permet à l’usager de transmettre une requête ou une plainte à l’administration à la suite de sollicitation d’une prestation",link:"https://service-public.bj/public/services/service/PS00027"},
            {service:"Délivrance de permis de travail",description:"La délivrance du permis de travail permet au travailleur étranger d’accéder à un emploi au Bénin.",link:"https://service-public.bj/public/services/service/PS00403"}
          ],
          title:" Travail et Fonction Publique"
        },
        {
          services:[
            {service:"Test COVID-19 ",description:"Ce service vous permet, lorsque vous êtes voyageur au Départ ou à l'Arrivée de Cotonou, de remplir le formulaire de Santé obligatoire  pour effectuer votre test COVID-19. Il vous permet également de consulter votre résultat en ligne et les différentes informations renseignées",link:"https://surveillancesanitaire.bj/"}
          ],
          title:"Santé"
        },
        {
          services: [
            {service:"Consultation en ligne des résultats du baccalauréat/erésultats",description:"Consultation en ligne résultats du baccalauréat",link:"https://eresultats.bj/"}
          ],
          title:"Enseignement Supérieur"
        },
        {
          services:[
            {service:"Demande de Titres d’Accès Aéroportuaire en ligne",description:"Demande de badge temporaire : pour les visiteurs ayant une mission temporaire à faire sur la plateforme aéroportuaire; Demande de badge permanent : pour tous les travailleurs à l’aéroport ",link:"https://service-public.bj/public/services/service/PS00401"}
          ],
          title:"Infrastructure et Transports"
        },
        {
          services:[
            {service:"Extrait du Registre de Commerce et de Crédit Mobilier (RCCM)",description:"Ce service permet d'obtenir un extrait du registre de commerce et de crédit mobilier (RCCM) d'une entreprise non radiée.",link:"#"},
            {service:"Gestion des Intentions (Import et Export)",description:"Gestion des Intentions (Import et Export) ",link:"https://service-public.bj/public/services/service/PS00310"},
            {service:"Gestion des Manifestes",description:"Gestion des Manifestes",link:"https://service-public.bj/public/services/service/PS00309"},
            {service:"Base de données des Entreprises du Bénin",description:"Ce service est intégré à la plateforme nationale de services aux entreprises « AHILIDO » pour permettre à tout internaute à travers l’option de recherche de vérifier l’existence d’une entreprise créée au Bénin.",link:"https://service-public.bj/public/services/service/PS00414"},
            {service:"Création d'une entreprise",description:"Création d'une entreprise au Bénin",link:"https://service-public.bj/public/services/service/PS00062"}
          ],
          title:"Industrie et Commerce"
        },
        {
          services:[
            {service:"Demande de raccordement des PME / PMI en Energie Electrique",description:"Raccordement gratuit des PME PMI de 140 à 160 kVA sur toute l’étendue du territoire",link:"https://service-public.bj/public/services/service/PS00261"}
          ],
          title:"Energie"
        },
        {
          services:[
            {service:"Demande de branchement des PME / PMI en eau ",description:"Permet de faire la demande de branchement pour les PME et PMI. Le raccordement des PME PMI est gratuit sur toute l’étendue du territoire. Conditions d’éligibilité A – Conditions d’accessibilité Etre une entreprise de catégorie PME PMI, régulièrement enregistrée en République du Bénin Les installations de la PME/PMI bénéficiaire de ce programme doivent être à 20m maximun du réseau de la SONEB. B – Condition d’utilisation Etre en mesure de consommer dès la mise en service du raccordement",link:"https://service-public.bj/public/services/service/PS00382"}
          ],
          title:"Eau et Mines"
        },
        {
          services:[
            {service:"Programme Spécial d'Insertion dans l'Emploi/PSIE ",description:"Initiative du Président de la République en faveur de la promotion et du développement des entreprises par les compétences et l’emploi des jeunes",link:"https://psie.bj/"}
          ],
          title:"Petites et Moyennes Entreprises, Promotion Emploi"
        },
        {
          services:[
            {service:"Autorisation de fourniture de services postaux",description:"Autorisation de fourniture de services postaux, conformément à l’arrêté 2016-052",link:"https://e-services.arcep.bj/dossier/offre/SP/demande"},
            {service:"Demande d'agrément installateur",description:"Le régime des agréments est organisé par les articles 212 à 219 de la loi n ° 2017-20 portant code du numérique en République du Bénin. L'agrément garantit, dans une certaine mesure,la conformité des installateurs d'équipements de respecter certaines normes spécifiées.",link:"https://e-services.arcep.bj/dossier/agrement/installateur/demande"},
            {service:"Demande d'agrément équipement",description:"L’agrément garantit, dans une certaine mesure, la conformité des installateurs d'équipements de respecter certaines normes spécifiées. Ces normes, si elles sont respectées, permettent d’évoluer dans un environnement radioélectrique quasi exempt de brouillage, de s’assurer de la possibilité de connecter au réseau les équipements et de les faire fonctionner de bout en bout, de contribuer à une bonne utilisation du spectre radioélectrique.",link:"https://service-public.bj/public/services/service/PS00290"},
            {service:"Demande d'assignation de fréquence ", description:"Examen des demandes d'assignation de fréquences des opérateurs titulaires d'une licence d'établissement et d'exploitation d'un réseau de télécommunications ouvert au public, l’ARCEP BENIN est habilité à recevoir et à traiter les demandes d'assignations de fréquences.",link:"https://e-services.arcep.bj/dossier/frequence/assignation/demande"},
            {service:"Déclaration de Service à Valeur Ajoutée (SVA)",description:"Les Services à Valeur Ajoutée (SVA) au Bénin sont sous le régime de déclaration conformément aux dispositions des articles 55 et 57 de la loi n ° 2017-20 du 20 avril 2018 portant Code du numérique en République du Bénin. Les modalités de déclaration de SVA sont fixées par l'Arrêté 2016 n ° 013 / MCTIC / DC / SGM / CTAP / DGCEP / DRC / SA du 12 février 2016.",link:"https://e-services.arcep.bj/dossier/sva/demande"},
            {service:"Plainte en brouillage",description:"Traitement des plaintes relatives au brouillage des émissions Radioélectriques.",link:"https://e-services.arcep.bj/dossier/frequence/brouillage/demande"},
            {service:"Plaintes à l'ARCEP",description:"Ce service permet aux usagers de déposer, auprès de l'ARCEP, des plaintes au sujet des fournisseurs des services de télécommunications et de la Poste",link:"https://arcep.bj/plaintes/"},
            {service:"Demande d'autorisation de service de communication électronique",description:"Autorisation d'offre de services de communications électroniques ",link:"https://service-public.bj/public/services/service/PS00300"},
            {service:"Demande de AB/PQ ",description:"Les AB / PQ sont des ressources en numérotation accordées aux exploitants de réseaux de télécommunications ouverts au public déclarés auprès de l'Autorité de Régulation.",link:"https://service-public.bj/public/services/service/PS00295"},
            {service:"Demande de numéro Service à Valeur Ajoutée (SVA) ",description:"Les numéros de cours d'accès à des services à valeur ajoutée sont les numéros à 4 chiffres de la tranche 7XYZ. Les numéros de cours d'accès à des services à valeur ajoutée sont attribués aux exploitants de réseaux de télécommunications ouverts au public ou aux fournisseurs de services déclarés auprès de l'Autorité de Régulation et à l'unité.", link:"https://e-services.arcep.bj/dossier/numero/sva/demande"},
            {service:"Demande de numéro d'urgence et d'assistance",description:"Les numéros d'accès aux services d'urgence et d'assistance sont des numéros courts à trois ou quatre chiffres des tranches 1XY et 1XYZ retenus pour l'accès à des services d'intérêt général (services sociaux, urgences, protection civile, etc. .) et également utilisables par les exploitants titulaires de licence pour offrir des services d'assistance à leurs clients reconnus",link:"https://e-services.arcep.bj/dossier/numero/urgence/demande"},
            {service:"Demande de raccordement des PME / PMI en Energie Electrique",description:"Le raccordement des PME PMI de 140 à 160 kVA est gratuit sur toute l'étendue du territoire.",link:"https://www.sbee.bj/site/demande-de-raccordement-des-pme-pmi-conditions/"},
            {service:"Déclaration de Service à Valeur Ajoutée (SVA)",description:"Les Services à Valeur Ajoutée (SVA) au Bénin sont sous le régime de déclaration conformément aux dispositions des articles 55 et 57 de la loi n ° 2017-20 du 20 avril 2018 portant Code du numérique en République du Bénin.",link:"https://e-services.arcep.bj/dossier/sva/demande"},
            {service:"Autorisation d'établissement de station aéronautique ",description:"Octroie des autorisations d'installation de station aéronautique",link:"https://e-services.arcep.bj/dossier/service/mobile/aeronautique/demande" },
            {service:"Autorisation d'établissement de station de radiolocalisation",description:"Octroi des autorisations d'installation de réseau indépendant de télécommunications filaire ou optique.",link:"https://e-services.arcep.bj/dossier/station/radiolocalisation/new"},
            {service:"Autorisation de fourniture de services postaux",description:"Octroie des autorisations de fourniture de services postaux.",link:"https://e-services.arcep.bj/dossier/offre/SP/demande"},
            {service:"Autorisation d'exploitation de réseau filaire ou optique",description:"Octroi des autorisations d'exploitation de réseau filaire ou optique.",link:"https://e-services.arcep.bj/dossier/reseau/filaire/demande"},
            {service:"Autorisation d'établissement de Réseau RMU ou 3RP",description:"Octroi des autorisations d'installation de réseau indépendant de télécommunications de type RMU ou 3RP ",link:"https://e-services.arcep.bj/dossier/reseau/rmu3rp/demande"},
            {service:"Autorisation d'établissement de Réseau VSAT SNG ",description:"Octroi des autorisations d'installations de réseau indépendant de télécommunication par satellite (VSAT/SNG).",link:"https://e-services.arcep.bj/dossier/reseau/vsat/sng/demande"},
            {service:"Autorisation d'établissement de Réseau fixe ou mobile (inf à 1GHz)",description:"Octroi des autorisations d'établissement de Réseau fixe ou mobile (inf à 1GHz).",link:"https://e-services.arcep.bj/dossier/reseau/pmr/inf1g/demande"},
            {service:"Autorisation d'établissement de réseau fixe (sup à 1 GHz) ",description:"Octroi des autorisations d'établissement de réseau fixe (sup à 1 GHz) ",link:"https://e-services.arcep.bj/dossier/reseau/fixe/sup1g/demande"}
          ],
          title:"Communication et Poste",
        }
      ],
       allData1:[
        {
          services:[
            {service:"Attestation de Non-Faillite",description:"Ce service permet d'obtenir une attestation de non-faillite d'une entreprise non radiée.",link:"https://service-public.bj/public/services/service/PS00349"},
            {service:"Délivrance du Casierjudiciaire (Extrait B3 ducasier judiciaire)",description:"Ce service permet à tout citoyen béninois, tout étranger résidant ou ayant résidé au Bénin de demander un extrait B3 de son casier judiciaire.",link:"https://service-public.bj/public/services/service/PS00373"},
            {service:"Délivrance du Certificat de Nationalité",description:"Délivrance du certificat de nationalité au demandeur pour lui permettre de prouver sa citoyenneté",link:"https://service-public.bj/public/services/service/PS00373"}
          ],
          title:"Justice et Législation"
        },
        
        {
          services:[
            {service:"Délivrance de passeport de service",description:"Délivrance de passeports de service au profit des citoyens qualifiés.",link:"https://service-public.bj/public/services/service/PS00051"},
            {service:"Délivrance de passeport diplomatique",description:"Délivrance de passeport diplomatique au profit des citoyens qualifiés",link:"https://service-public.bj/public/services/service/PS00051"},
            {service:"Délivrance de visa électronique (e-visa)",description:"Ce service permet à tout étranger désireux de visiter la République du Bénin de soumettre sa demande de visa en ligne",link:"https://evisa.gouv.bj/fr/"},
          ],
          title:"Affaires étrangères"
        },
        {
          services:[
            {service:"État descriptif",description:"Document qui renseigne sur les caractéristiques (propriétaire, nature, situation, lieu, contenance, inscriptions, etc.) d’un titre de propriété à un instant précis.",link:"https://enotaire.andf.bj/"},
            {service:"Extrait de plan cadastral d'une parcelle",description:"Document qui renseigne sur les caractéristiques (propriétaire, nature, situation, lieu, contenance, inscriptions, etc.) d’un titre de propriété à un instant précis.",link:"https://enotaire.andf.bj/"},
            {service:"Attestation de confirmation cadastrale",description:"Attestation de confirmation cadastrale",link:"http://services.andf.bj/commande/1"},
            {service:"Coordonnées géographiques des sommets d'une parcelle",description:"Ce service fournit les Coordonnées géographiques des sommets d'une parcelle.",link:"http://services.andf.bj/commande/4"},
            {service:"Extrait de l'ortho photographie aérienne de",description:"Extrait de l'ortho photographie aérienne de résolution 20 cm",link:"http://services.andf.bj/commande/2"},
            {service:"Extrait de plan parcellaire",description:"Extrait de plan cadastral d'une parcelle.",link:"http://services.andf.bj/commande/5"},
            {service:"Extrait de plan parcellaire numérique géo-référencé",description:"Ce service fournit l'extrait de plan parcellaire numérique géo-référencé.",link:"http://services.andf.bj/commande/6"},
            {service:"Identité et adresse du propriétaire d'une parcelle",description:"Ce service fournit l'identité et l'adresse du propriétaire d'une parcelle.",link:"http://services.andf.bj/commande/3"},
            {service:"Inscription (Service permettant d’effectuer les opérations de Mutations,hypothèques,morcellements,radiations,etc.sur un titre foncier)",description:"Service permettant d’effectuer les opérations de Mutations, hypothèques, morcellements, radiations, etc. sur un titre foncier",link:"https://enotaire.andf.bj/"},
            {service:"Accès aux indicateurs « FAIRE DES AFFAIRES »",description:"Permet d’accéder aux informations sur le climat des affaires au Bénin",link:"https://doingbusinessinbenin.com/"},
            {service:"Autorisation de Change pour Remboursement d’emprunt",description:"Autorisation accordée à toute personnephysique ou morale pour remboursement d’emprunt",link:"https://guce.gouv.bj/?lang=fr"},
            {service:"Autorisation de Change pour Règlement par avance de fret",description:"Autorisation accordée à toute personne physique ou morale pour règlement par avance de fret",link:"https://guce.gouv.bj/?lang=fr"},
            {service:"Autorisation de Change pour Règlement après prestation de fret",description:"Autorisation accordée à toute personne physique ou morale pour Règlement après prestation de fret",link:"https://guce.gouv.bj/?lang=fr"},
            {service:"Autorisation de Change pour Règlement après réception de marchandises de fournisseur de vivres frais, de friperies, de médicaments et de réactifs de laboratoires",description:"Autorisation accordée à toute personne physique ou morale désireuse de transférer des frais pour règlement après réception de marchandises de fournisseur de vivres frais, de friperies, de médicaments et de réactifs de laboratoires",link:"https://guce.gouv.bj/?lang=fr"},
            {service:"Autorisation de Change pour Règlement de fournisseur de marchandises d’un montant inférieur à 3.000.000 FCFA",description:"Autorisation accordée à toute personne physique ou morale pour Règlement de fournisseur de marchandises d’un montant inférieur à 3.000.000 FCFA:",link:"https://guce.gouv.bj/?lang=fr"},
            {service:"Autorisation de Change pour Règlement de fournisseur de véhicules d’occasion",description:"Autorisation accordée à toute personne physique ou morale pour règlement de fournisseur de véhicules d’occasion",link:"https://guce.gouv.bj/?lang=fr"},
            {service:"Autorisation de Change pour Règlement de frais de scolarité (1ère inscription)",description:"Autorisation accordée à toute personne physique ou morale désireuse de transférer des frais de scolarité à un bénéficiaire à l'extérieur.",link:"https://guce.gouv.bj/?lang=fr"},
            {service:"Déclaration d'impôts",description:"Déclaration et paiement des impôts",link:"https://eservices.impots.bj/login?returnUrl=%2Fhome"},
            {service:"Délivrance de bulletins de paye aux agents de l'Etat",description:"Mise en ligne de bulletin de paie des agents civils et militaires de l’Etat. Diffusion mensuelle parallèlement dans les boîtes électroniques des agents.",link:"https://equittancetresor.finances.bj:9051/"},
            {service:"Délivrance de quittance informatisée",description:"Délivrance de quittance de versement.",link:"https://equittancetresor.finances.bj:9051/"},
            {service:"Dépôt de bilan",description:"Dépôt et traitement des états financiers",link:"https://ebilan.impots.bj/"},
            {service:"Micro Crédit Mobile",description:"Octroi de Micro-crédit via la plateforme de finance digitale",link:"https://fnm.sygmacarmes.com/"},
            {service:"Rapportage automatique de la mise en œuvre des actions et reformes",description:"Ce service permet de générer de manière automatique les statistiques et les rapports permettant de renseigner sur le niveau de mise en œuvre des actions de réforme.",link:"https://reformes-ugr.finances.bj/"},
            {service:"Immatriculation des contribuables de la DGI / IFU",description:"L'immatriculation permet d’attribuer un numéro unique aux personnes physiques et morales redevables de divers impôts.",link:"https://www.service-public.bj/public/services/service/PS00402"},
            {service:"Extrait de plan cadastral d'une parcelle",description:"Extrait de plan cadastral d'une parcelle.",link:"http://services.andf.bj/commande/1"},
            {service:"Attestation de prise en charge pour les agents admis à la retraite",description:"Pièce attestant que l’intéressé jouit de sa pension de retraite sur le FNRB",link:"https://www.service-public.bj/public/services/service/PS00004"},
            {service:"Attestation d’affiliation au FNRB",description:"Pièce attestant que l’intéressé cotise au FNRB",link:"https://www.service-public.bj/public/services/service/PS00002"},
            {service:"Attestation de jouissance de droits à une pension de retraite",description:"Pièce attestant que l’intéressé jouit de sa pension de retraite au FNRB",link:"https://www.service-public.bj/public/services/service/PS00003"},
            {service:"Calcul des droits et taxes applicables",description:"Simulation du calcul des droits et taxes payables au cordon douanier",link:"https://guce.gouv.bj/taxation-simulation/?navbarActive=services"},
            {service:"Accès aux marchés publics",description:"Permet de consulter les appels d'offre et de soumissionner aux marchés publics à travers la plate-forme commune d'échange entre les acheteurs publics et les fournisseurs",link:"https://www.marches-publics.bj/"},
            {service:"Répertoire des prix de référence",description:"Mercurial des prix pour la commande publique.",link:"https://controlefinancier.bj/repertoire/recherche/prix"},
            {service:"Délivrance de bulletins de paye aux agents de l'Etat",description:"Mise en ligne de bulletin de paie des agents civils et militaires de l’Etat. Diffusion mensuelle parallèlement dans les boîtes électroniques des agents.",link:"https://www.bulletinpaie.finances.bj:8443/login"}
          ],
          title:"Economie Finances"
        },
        {
          services:[
            {service:"Délivrance de passeport ordinaire biométrique",description:"Le passeport ordinaire biométrique béninois est un document de voyage délivré aux personnes ayant la nationalité béninoise.",link:"https://service-public.bj/public/services/service/PS00328" },
            {service:"Vérification du statut de la demande de passeport (ordinaire) ",description:"Ce service permet à l'usager de vérifier en ligne le statut de sa demande de passeport",link:"https://service-public.bj/public/services/service/PS00329"},
          ],
          title:"Intérieur et Sécurité Publique"
        },
        {
          services:[
            {service:"Certificat de Conformité Environnementale et Sociale",description:"Le Certificat de Conformité Environnementale est une attestation délivrée pour confirmer la faisabilité environnementale d’un projet.",link:"https://service-public.bj/public/services/service/PS00006"},
            {service:"Permis de construire ",description:"Le permis de construire est une décision administrative qui autorise, sur la base des règles d’urbanisme, de constructions nouvelles, la modification de travaux de construction non achevés, la régularisation de travaux de construction d’un ouvrage entrepris sans autorisation.",link:"https://service-public.bj/public/services/service/PS00141"},
          ],
          title:"Cadre de Vie et Développement Durable"
        },
        {
          services:[
            {service:"Enregistrement des ONG et associations ",description:"Délivrance du récépissé de déclaration des associations, des Organisations Non Gouvernementale et autres structures de type associatif ",link:"https://service-public.bj/public/services/service/PS00073"},
          ],
          title:"Décentralisation, Gouvernance Locale"
        },
        {
          services : [
            {service:"Consultation en ligne des actes de carrière ",description:"Permet à l’usager agent de l’État d’accéder : sa dernière situation administrative ;ses lignes carrière ;ses informations bordereau de mandatement transmis au Ministère de l’Économie et des Finances.",link:"https://service-public.bj/public/services/service/PS00028"},
            {service:"Enregistrement et suivi du traitement des requêtes et des plaintes des usagers du ministère du travail (Volet mataccueil)",description:"Permet à l’usager de transmettre une requête ou une plainte à l’administration à la suite de sollicitation d’une prestation",link:"https://service-public.bj/public/services/service/PS00027"},
            {service:"Délivrance de permis de travail",description:"La délivrance du permis de travail permet au travailleur étranger d’accéder à un emploi au Bénin.",link:"https://service-public.bj/public/services/service/PS00403"}
          ],
          title:" Travail et Fonction Publique"
        },
        {
          services:[
            {service:"Test COVID-19 ",description:"Ce service vous permet, lorsque vous êtes voyageur au Départ ou à l'Arrivée de Cotonou, de remplir le formulaire de Santé obligatoire  pour effectuer votre test COVID-19. Il vous permet également de consulter votre résultat en ligne et les différentes informations renseignées",link:"https://surveillancesanitaire.bj/"}
          ],
          title:"Santé"
        },
        {
          services: [
            {service:"Consultation en ligne des résultats du baccalauréat/erésultats",description:"Consultation en ligne résultats du baccalauréat",link:"https://eresultats.bj/"}
          ],
          title:"Enseignement Supérieur"
        },
        {
          services:[
            {service:"Demande de Titres d’Accès Aéroportuaire en ligne",description:"Demande de badge temporaire : pour les visiteurs ayant une mission temporaire à faire sur la plateforme aéroportuaire; Demande de badge permanent : pour tous les travailleurs à l’aéroport ",link:"https://service-public.bj/public/services/service/PS00401"}
          ],
          title:"Infrastructure et Transports"
        },
        {
          services:[
            {service:"Extrait du Registre de Commerce et de Crédit Mobilier (RCCM)",description:"Ce service permet d'obtenir un extrait du registre de commerce et de crédit mobilier (RCCM) d'une entreprise non radiée.",link:"#"},
            {service:"Gestion des Intentions (Import et Export)",description:"Gestion des Intentions (Import et Export) ",link:"https://service-public.bj/public/services/service/PS00310"},
            {service:"Gestion des Manifestes",description:"Gestion des Manifestes",link:"https://service-public.bj/public/services/service/PS00309"},
            {service:"Base de données des Entreprises du Bénin",description:"Ce service est intégré à la plateforme nationale de services aux entreprises « AHILIDO » pour permettre à tout internaute à travers l’option de recherche de vérifier l’existence d’une entreprise créée au Bénin.",link:"https://service-public.bj/public/services/service/PS00414"},
            {service:"Création d'une entreprise",description:"Création d'une entreprise au Bénin",link:"https://service-public.bj/public/services/service/PS00062"}
          ],
          title:"Industrie et Commerce"
        },
        {
          services:[
            {service:"Demande de raccordement des PME / PMI en Energie Electrique",description:"Raccordement gratuit des PME PMI de 140 à 160 kVA sur toute l’étendue du territoire",link:"https://service-public.bj/public/services/service/PS00261"}
          ],
          title:"Energie"
        },
        {
          services:[
            {service:"Demande de branchement des PME / PMI en eau ",description:"Permet de faire la demande de branchement pour les PME et PMI. Le raccordement des PME PMI est gratuit sur toute l’étendue du territoire. Conditions d’éligibilité A – Conditions d’accessibilité Etre une entreprise de catégorie PME PMI, régulièrement enregistrée en République du Bénin Les installations de la PME/PMI bénéficiaire de ce programme doivent être à 20m maximun du réseau de la SONEB. B – Condition d’utilisation Etre en mesure de consommer dès la mise en service du raccordement",link:"https://service-public.bj/public/services/service/PS00382"}
          ],
          title:"Eau et Mines"
        },
        {
          services:[
            {service:"Programme Spécial d'Insertion dans l'Emploi/PSIE ",description:"Initiative du Président de la République en faveur de la promotion et du développement des entreprises par les compétences et l’emploi des jeunes",link:"https://psie.bj/"}
          ],
          title:"Petites et Moyennes Entreprises, Promotion Emploi"
        },
        {
          services:[
            {service:"Autorisation de fourniture de services postaux",description:"Autorisation de fourniture de services postaux, conformément à l’arrêté 2016-052",link:"https://e-services.arcep.bj/dossier/offre/SP/demande"},
            {service:"Demande d'agrément installateur",description:"Le régime des agréments est organisé par les articles 212 à 219 de la loi n ° 2017-20 portant code du numérique en République du Bénin. L'agrément garantit, dans une certaine mesure,la conformité des installateurs d'équipements de respecter certaines normes spécifiées.",link:"https://e-services.arcep.bj/dossier/agrement/installateur/demande"},
            {service:"Demande d'agrément équipement",description:"L’agrément garantit, dans une certaine mesure, la conformité des installateurs d'équipements de respecter certaines normes spécifiées. Ces normes, si elles sont respectées, permettent d’évoluer dans un environnement radioélectrique quasi exempt de brouillage, de s’assurer de la possibilité de connecter au réseau les équipements et de les faire fonctionner de bout en bout, de contribuer à une bonne utilisation du spectre radioélectrique.",link:"https://service-public.bj/public/services/service/PS00290"},
            {service:"Demande d'assignation de fréquence ", description:"Examen des demandes d'assignation de fréquences des opérateurs titulaires d'une licence d'établissement et d'exploitation d'un réseau de télécommunications ouvert au public, l’ARCEP BENIN est habilité à recevoir et à traiter les demandes d'assignations de fréquences.",link:"https://e-services.arcep.bj/dossier/frequence/assignation/demande"},
            {service:"Déclaration de Service à Valeur Ajoutée (SVA)",description:"Les Services à Valeur Ajoutée (SVA) au Bénin sont sous le régime de déclaration conformément aux dispositions des articles 55 et 57 de la loi n ° 2017-20 du 20 avril 2018 portant Code du numérique en République du Bénin. Les modalités de déclaration de SVA sont fixées par l'Arrêté 2016 n ° 013 / MCTIC / DC / SGM / CTAP / DGCEP / DRC / SA du 12 février 2016.",link:"https://e-services.arcep.bj/dossier/sva/demande"},
            {service:"Plainte en brouillage",description:"Traitement des plaintes relatives au brouillage des émissions Radioélectriques.",link:"https://e-services.arcep.bj/dossier/frequence/brouillage/demande"},
            {service:"Plaintes à l'ARCEP",description:"Ce service permet aux usagers de déposer, auprès de l'ARCEP, des plaintes au sujet des fournisseurs des services de télécommunications et de la Poste",link:"https://arcep.bj/plaintes/"},
            {service:"Demande d'autorisation de service de communication électronique",description:"Autorisation d'offre de services de communications électroniques ",link:"https://service-public.bj/public/services/service/PS00300"},
            {service:"Demande de AB/PQ ",description:"Les AB / PQ sont des ressources en numérotation accordées aux exploitants de réseaux de télécommunications ouverts au public déclarés auprès de l'Autorité de Régulation.",link:"https://service-public.bj/public/services/service/PS00295"},
            {service:"Demande de numéro Service à Valeur Ajoutée (SVA) ",description:"Les numéros de cours d'accès à des services à valeur ajoutée sont les numéros à 4 chiffres de la tranche 7XYZ. Les numéros de cours d'accès à des services à valeur ajoutée sont attribués aux exploitants de réseaux de télécommunications ouverts au public ou aux fournisseurs de services déclarés auprès de l'Autorité de Régulation et à l'unité.", link:"https://e-services.arcep.bj/dossier/numero/sva/demande"},
            {service:"Demande de numéro d'urgence et d'assistance",description:"Les numéros d'accès aux services d'urgence et d'assistance sont des numéros courts à trois ou quatre chiffres des tranches 1XY et 1XYZ retenus pour l'accès à des services d'intérêt général (services sociaux, urgences, protection civile, etc. .) et également utilisables par les exploitants titulaires de licence pour offrir des services d'assistance à leurs clients reconnus",link:"https://e-services.arcep.bj/dossier/numero/urgence/demande"},
            {service:"Demande de raccordement des PME / PMI en Energie Electrique",description:"Le raccordement des PME PMI de 140 à 160 kVA est gratuit sur toute l'étendue du territoire.",link:"https://www.sbee.bj/site/demande-de-raccordement-des-pme-pmi-conditions/"},
            {service:"Déclaration de Service à Valeur Ajoutée (SVA)",description:"Les Services à Valeur Ajoutée (SVA) au Bénin sont sous le régime de déclaration conformément aux dispositions des articles 55 et 57 de la loi n ° 2017-20 du 20 avril 2018 portant Code du numérique en République du Bénin.",link:"https://e-services.arcep.bj/dossier/sva/demande"},
            {service:"Autorisation d'établissement de station aéronautique ",description:"Octroie des autorisations d'installation de station aéronautique",link:"https://e-services.arcep.bj/dossier/service/mobile/aeronautique/demande" },
            {service:"Autorisation d'établissement de station de radiolocalisation",description:"Octroi des autorisations d'installation de réseau indépendant de télécommunications filaire ou optique.",link:"https://e-services.arcep.bj/dossier/station/radiolocalisation/new"},
            {service:"Autorisation de fourniture de services postaux",description:"Octroie des autorisations de fourniture de services postaux.",link:"https://e-services.arcep.bj/dossier/offre/SP/demande"},
            {service:"Autorisation d'exploitation de réseau filaire ou optique",description:"Octroi des autorisations d'exploitation de réseau filaire ou optique.",link:"https://e-services.arcep.bj/dossier/reseau/filaire/demande"},
            {service:"Autorisation d'établissement de Réseau RMU ou 3RP",description:"Octroi des autorisations d'installation de réseau indépendant de télécommunications de type RMU ou 3RP ",link:"https://e-services.arcep.bj/dossier/reseau/rmu3rp/demande"},
            {service:"Autorisation d'établissement de Réseau VSAT SNG ",description:"Octroi des autorisations d'installations de réseau indépendant de télécommunication par satellite (VSAT/SNG).",link:"https://e-services.arcep.bj/dossier/reseau/vsat/sng/demande"},
            {service:"Autorisation d'établissement de Réseau fixe ou mobile (inf à 1GHz)",description:"Octroi des autorisations d'établissement de Réseau fixe ou mobile (inf à 1GHz).",link:"https://e-services.arcep.bj/dossier/reseau/pmr/inf1g/demande"},
            {service:"Autorisation d'établissement de réseau fixe (sup à 1 GHz) ",description:"Octroi des autorisations d'établissement de réseau fixe (sup à 1 GHz) ",link:"https://e-services.arcep.bj/dossier/reseau/fixe/sup1g/demande"}
          ],
          title:"Communication et Poste",
        }
      ],
      searchQuery:'',
      resultQuery:[]

    }
  },
  methods:{
    recherche() {
      this.is_recherche = false
      if(this.searchQuery !='' || this.searchQuery != null  ){
        const knowledgeBaseSearchQueryLower = this.searchQuery.toLowerCase()
        this.resultQuery = this.newData.filter(item => item.service.toLowerCase().includes(knowledgeBaseSearchQueryLower))
        return this.resultQuery
      }
    }
  },
  computed:{
    
    newData() {
      const my_datas = this.allData
      if(my_datas) {
        const tab =[]
        const datas = my_datas.map(data => {
          return data.services
        })
        for (let index = 0; index < datas.length; index++) {
          const element = datas[index];
          for (let index1 = 0; index1 < element.length; index1++) {
            const element1 = element[index1];
            tab.push(element1)
          }
          //tab.push(element)
          
        }
        return tab
      }
    }
  }
}
</script>

<style scoped>
.emoji-404{
  position: relative;
  animation: mymove 2.5s infinite;
}

@keyframes mymove {
  33%   {top: 0px;}
  66%  {top: 20px;}
  100%  {top: 0px}
}
</style>