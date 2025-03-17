/**
 * organiser un jeu en ligne sur son site afin de faire gagner des pâtisseries !

Le principe est simple, les clients peuvent lancer 5 dés 3 fois, 
si sur un de ces lancers, ils obtiennent un brelan ou un carré alors ils gagnent 1 ou 2 pâtisseries. 

Vous intégrez l'équipe en tant que développeur front-end. 
Le développeur back-end a terminé de créer l'API et vous a mis à disposition une documentation afin que vous puissiez l'utiliser.
 */

// variable en fra,çais
const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
    pastries: []
}