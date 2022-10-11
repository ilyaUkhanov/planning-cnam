# Boilerplate react-native

Il est recommandé d'utiliser ce boilerplate react-native avec le [boilerplate web](https://github.com/C-Koya-Tech/CKTBoilerplate).

-   [Installation](#installation)
    -   [Changer le nom d'affichage](#changer-le-nom-daffichage-de-lapplication)
    -   [Changer le nom de package](#changer-le-nom-de-package-de-lapplication)
    -   [Changer le bootsplash](#changer-le-bootsplash)
-   [Structure du projet](#structure-du-projet)
    -   [`assets`](#assets)
    -   [`components`](#components)
        -   [`Button`](#button)
        -   [`IconButton`](#iconbutton)
        -   [`Container`](#container)
        -   [`ContentMenu`](#contentmenu)
        -   [`ContentMenuItem`](#contentmenuitem)
        -   [`TextInput`](#textinput)
        -   [`OneActionModal`](#oneactionmodal)
        -   [`DoubleActionModal`](#doubleactionmodal)
        -   [`MainNavigationBar`](#mainnavigationbar)
        -   [`CommitActionNavigationBar`](#commitactionnavigationbar)
        -   [`BackNavigationBar`](#backnavigationbar)
        -   [`Text`](#text)
        -   [`Paragraph`](#paragraph)
    -   [`constants`](#constants)
    -   [`helpers`](#helpers)
    -   [`hooks`](#hooks)
    -   [`interfaces`](#interfaces)
    -   [`pages`](#pages)
    -   [`redux`](#redux)
    -   [`routes`](#routes)
    -   [`services`](#services)
        -   [`ApiProvider`](#apiprovider)
        -   [`AuthProvider`](#authprovider)
        -   [`ErrorHandleProvider`](#errorhandleprovider)
        -   [`PermissionProvider`](#permissionprovider)
-   [Librairies utilisés](#librairies-utilises)
    -   [`react-query`](#react-query)
    -   [`styled-components`](#styled-components)
    -   [`react-native-vector-icons`](#react-native-vector-icons)
    -   [`formik`](#formik)
    -   [Librairies additionnels](#librairies-additionnels)

# Installation

## Changer le nom d'affichage de l'application

Changer le nom d'affichage de l'application dans les trois fichiers suivants :

-   `app.json`
-   `strings.xml` <sub>(android/app/src/main/res/values/strings.xml)</sub>
-   `Info.plist` <sub>(ios/app/Info.plist)</sub>

## Changer le nom de package de l'application

Remplacer toutes les occurrences à `e_rustyle` dans le projet en faisant un : <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>.

Le nouveau nom de package doit être sous la forme suivante : **mon_nom_de_package** !

## Changer le bootsplash

Le package utilisé pour le bootsplash fourni une [commande CLI](https://github.com/zoontek/react-native-bootsplash#setup) afin de faciliter la génération des assets. Il suffit de changer le logo dans le dossier [`assets`](#assets) et d'exécuter la commande.

Un exemple d'utilisation du CLI :

    npx react-native generate-bootsplash src/assets/logo.png --background-color=FFFFFF --logo-width=150 --assets-path=src/assets/bootsplash

# Structure du projet

**⚠ Il est important d'exporter les elements d'un même dossier depuis le fichier `index.ts` associé. ⚠**

## `assets`

Ce dossier contient tous les fichiers visuels : `images`, `videos`, `svg`, ...

Le dossier contient par exemple :

-   l'image du logo utilisé dans le [bootsplash](#changer-le-bootsplash).

## `components`

Ce dossier contient tous les `composants réutilisables` dans l'application. Les components seront utilisés dans les [`pages`](#pages).

Le dossier contient les composants suivants :

### `Button`

Un bouton avec du texte.

Ce composant reprend toutes les propriétés du composant natif : `TouchableOpacity`. Les propriétés additionnelles sont les suivantes :

-   `loading` : `boolean` _(optionnelle)_ Propriété qui affiche un spinner dans le bouton.
-   `touchableStyle` : `ViewStyle` _(optionnelle)_ Ajoute un style supplémentaire sur la partie touchable du bouton.
-   `textStyle` : `TextStyle` _(optionnelle)_ Ajoute un style supplémentaire sur le texte du bouton.
-   `activityIndicatorStyle` : `ViewStyle` _(optionnelle)_ Ajoute un style supplémentaire sur le spinner.

### `IconButton`

Un bouton avec un icon.

Ce composant reprend toutes les propriétés du composant natif : `TouchableOpacity`. Les propriétés additionnelles sont les suivantes :

-   `name` : `string` **_(obligatoire)_** Nom de l'icon depuis cette [liste](https://oblador.github.io/react-native-vector-icons/).
-   `loading` : `boolean` _(optionnelle)_ Propriété qui affiche un spinner dans le bouton.
-   `iconFamily` : `ICON_FAMILIES | string` _(optionnelle)_ Défini la [famille de style](https://oblador.github.io/react-native-vector-icons/) de l'icon.
-   `touchableStyle` : `ViewStyle` _(optionnelle)_ Ajoute un style supplémentaire sur la partie touchable du bouton.
-   `iconStyle` : `TextStyle` _(optionnelle)_ Ajoute un style supplémentaire sur l'icon.
-   `activityIndicatorStyle` : `ViewStyle` _(optionnelle)_ Ajoute un style supplémentaire sur le spinner.
-   `transparentBackground` : `boolean` _(optionnelle)_ Propriété qui rend le background transparent.

### `Container`

Un composant qui englobe toutes les pages.

Ce composant reprend toutes les propriétés du composant natif : `SafeAreaView`. Les propriétés additionnelles sont les suivantes :

-   `variant` : `boolean` _(optionnelle)_ Propriété qui défini la couleur de fond de la page sur `background_variant` au lieu de `background`. **À utiliser si il y a un composant [`ContentMenu`](#contentmenu) sur la page !**
-   `noScrollView` : `boolean` _(optionnelle)_ Propriété qui enlève la `ScrollView` du composant. **À utiliser si il y a un autre composant avec une `ScrollView` sur la page pour éviter l'imbrication des `ScrollView` ! Exemple : `ScrollView`, `FlatList`, etc.**
-   `rootContainerStyle` : `ViewStyle` _(optionnelle)_ Ajoute un style supplémentaire sur l'élément le plus haut du composant.
-   `scrollViewStyle` : `ViewStyle` _(optionnelle)_ Ajoute un style supplémentaire sur la `ScrollView` du composant.
-   `containerStyle` : `ViewStyle` _(optionnelle)_ Ajoute un style supplémentaire sur le contenu du composant.

### `ContentMenu`

Un composant qui permet d'afficher une petite liste d'éléments sous forme : clé/valeur.

Ce composant reprend toutes les propriétés du composant natif : `View`. Les propriétés additionnelles sont les suivantes :

-   `title` : `string` _(optionnelle)_ Ajoute un titre au dessus du menu.
-   `informationText` : `string` _(optionnelle)_ Ajoute un texte de description en dessous du menu.
-   `loading` : `boolean` _(optionnelle)_ Propriété qui affiche un spinner à droite du `title`. **Le `title` est obligatoire pour que le spinner s'affiche.**

**Les éléments enfants du `ContentMenu` sont les [`ContentMenuItem`](#contentmenuitem).**

### `ContentMenuItem`

Un composant qui permet d'afficher une ligne dans le composant [`ContentMenu`](#contentmenu).

Ce composant reprend toutes les propriétés du composant natif : `TouchableOpacity`. Les propriétés additionnelles sont les suivantes :

-   `leftIconName` : `string` _(optionnelle)_ Nom de l'icon depuis cette [liste](https://oblador.github.io/react-native-vector-icons/) affiché à gauche de la ligne.
-   `leftIconFamily` : `ICON_FAMILIES | string` _(optionnelle)_ Défini la [famille de style](https://oblador.github.io/react-native-vector-icons/) de l'icon de gauche.
-   `label` : `string | Element` _(optionnelle)_ Affiche cet element/texte à gauche dans le composant.
-   `value` : `string | Element` _(optionnelle)_ Affiche cet element/texte à droite dans le composant.
-   `link` : `boolean` _(optionnelle)_ Propriété qui ajoute un icon chevron à droite dans le composant pour indiquer que la ligne est un lien de navigation cliquable.
-   `action` : `boolean` _(optionnelle)_ Propriété qui change la couleur du label <small>(`string`)</small> en bleu pour indiquer que la ligne est une action cliquable.
-   `remove` : `boolean` _(optionnelle)_ Propriété qui change la couleur du label <small>(`string`)</small> en rouge pour indiquer que la ligne est une action cliquable.
-   `disabled` : `boolean` _(optionnelle)_ Propriété qui désactive les événements clique sur la ligne.

### `TextInput`

Un champ de texte.

Ce composant reprend toutes les propriétés du composant natif : `View`. Les propriétés additionnelles sont les suivantes :

-   `title` : `string` _(optionnelle)_ Ajoute un titre au dessus de l'input.
-   `disableClearButton` : `boolean` _(optionnelle)_ Propriété qui cache le bouton de nettoyage de l'input.
-   `textInputContainerStyle` : `ViewStyle` _(optionnelle)_ Ajoute un style supplémentaire sur l'élément parent du composant natif `TextInput`.
-   `textInputStyle` : `TextStyle` _(optionnelle)_ Ajoute un style supplémentaire sur le composant natif `TextInput`.

### `OneActionModal`

Une modal avec un bouton.

Ce composant reprend toutes les propriétés du composant natif : [`Modal`](https://github.com/react-native-modal/react-native-modal). Les propriétés additionnelles sont les suivantes :

-   `title` : `string` _(optionnelle)_ Ajoute un titre en haut de la modal.
-   `message` : `string` **_(obligatoire)_** Ajoute un message dans la modal.
-   `onAction` : `(...args: any) => void` **_(obligatoire)_** Ajoute une fonction callback qui est appelé lors d'un clique sur le bouton de la modal ou lors d'un clique en dehors de la modal.
-   `actionTitle` : `string` **_(obligatoire)_** Ajoute un texte au bouton.

### `DoubleActionModal`

Une modal avec deux boutons, un pour confirmer et un pour annuler.

Ce composant reprend toutes les propriétés du composant natif : [`Modal`](https://github.com/react-native-modal/react-native-modal). Les propriétés additionnelles sont les suivantes :

-   `title` : `string` _(optionnelle)_ Ajoute un titre en haut de la modal.
-   `message` : `string` **_(obligatoire)_** Ajoute un message dans la modal.
-   `onValidate` : `(...args: any) => void` **_(obligatoire)_** Ajoute une fonction callback qui est appelé lors d'un clique sur le bouton valider de la modal.
-   `onDecline` : `(...args: any) => void` **_(obligatoire)_** Ajoute une fonction callback qui est appelé lors d'un clique sur le bouton annuler de la modal ou lors d'un clique en dehors de la modal.
-   `validateActionTitle` : `string` **_(obligatoire)_** Ajoute un texte au bouton valider.
-   `declineActionTitle` : `string` **_(obligatoire)_** Ajoute un texte au bouton annuler.

### `MainNavigationBar`

La barre de navigation principale.

### `CommitActionNavigationBar`

La barre de navigation des paramètres.

### `BackNavigationBar`

La barre de navigation des autres pages de l'application. Cette barre comporte un bouton pour retourner à la page précédente.

### `Text`

Un texte.

Ce composant reprend toutes les propriétés du composant natif : `Text`.

### `Paragraph`

Un long texte.

Ce composant reprend toutes les propriétés du composant natif : `Text`.

## `constants`

Ce dossier contient toutes les `variables constantes`.

Le dossier contient déjà les fichiers suivants :

-   `envConstants.ts` : Les variables d'environnement.
-   `fetchConstants.ts` : Les variables liées aux requêtes.
-   `routeConstants.ts` : Les urls et les routes de l'api.
-   `themeConstants.ts` : Les différents thèmes de couleurs.

## `helpers`

Ce dossier contient toutes les `fonctions utiles`.

Le dossier contient déjà les fichiers suivants :

-   `fetchHelpers.ts` : Les fonctions utiles pour la gestion des requêtes.
-   `stringHelpers.ts` : Les fonctions utiles sur les strings.

## `hooks`

Ce dossier contient tout les [`custom hooks`](#https://fr.reactjs.org/docs/hooks-custom.html).

## `interfaces`

Ce dossier contient tous les `type` et `interface` typescript.

Le dossier contient par exemple :

-   Un fichier pour chaque [provider](#services).
-   Les attributs de couleur pour le thème.

## `pages`

Ce dossier contient toutes les `vues/pages` de l'application.

## `redux`

_Les packages `@reduxjs/toolkit`, `react-redux`, `redux` et `redux-persist` permettent (en lien avec `@react-native-async-storage/async-storage`) de persister sur le téléphone des données. Les données persistées sont récupérées au lancement de l'application. Cela permet par exemple de créer un mode hors ligne._

Ce dossier contient tous les reducers, chaque reducer gère une donnée sous forme d'objet, et cette donnée peut être modifié grace à des méthodes. Chaque méthode est appelée avec la méthode `dispatch()`.

Pour ajouter un reducer :

-   Créer un fichier `monSlice.ts` dans le dossier `reducers`.
-   Ajouter le nouveau slice dans la liste des reducers :

```js
const reducers = combineReducers({
    // ...
    monSlice,
});
```

Pour récupérer l'objet du reducer :

**Importer `useSelector` du dossier `redux` et non de la lib `react-redux` !**

```js
const monObject = useSelector((state) => state.monSlice.monObject);
```

Pour modifier l'objet du reducer :

```js
export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<ITheme>) => {
            state.theme = action.payload;
        },
    },
});

export const { changeTheme } = themeSlice.actions;
```

**Importer `useDispatch` du dossier `redux` et non de la lib `react-redux` !**

```js
const dispatch = useDispatch();

dispatch(changeTheme(LIGHT_THEME));
```

## `routes`

Ce dossier contient toutes les `routes` qui serviront à la navigation.

Le dossier contient par exemple :

-   `AuthRoutes.tsx` : La route de base à la racine de toutes les autres routes. Grâce au [`AuthProvider`](#authprovider), cette route affiche la page de login si le user n'est pas connecté, sinon elle affiche la `MainRoutes`.
-   `MainRoutes.tsx` : La route dans laquelle toutes les pages _(accessible après authentification)_ vont être définies. Il est recommandé de créer une route par navigation métier (ex : [`SettingsRoutes.tsx`](https://github.com/C-Koya-Tech/React-native-boilerplate/blob/master/src/routes/SettingsRoutes.tsx) pour les pages liées à la configuration).

## `services`

Ce dossier contient tous les `providers`.

### `ApiProvider`

Provider concernant les requêtes api, il permet de faciliter la création et la gestion des erreurs (ex : erreur serveur, perte de connexion, ...).

Le provider met à disposition les objets suivants :

-   `useFetch` : Méthode qui encapsule l'appel fetch et gère les erreurs diverses. Elle prend en paramètre un [callback](https://github.com/C-Koya-Tech/React-native-boilerplate/blob/master/src/services/api/authApi.ts) qui renvoie l'appel fetch. Pour catch sois même les erreurs, il faut désactiver le catch du `useFetch` en passant le booléen du deuxième paramètre à true. Cette méthode renvoie les données reçues au format json.
-   `isInternetReachable` : Variable indicant si le téléphone est connecté ou non à une source de réseau.
-   `checkStatus` : Méthodes à appeler après avoir récupéré la response d'un fetch. Cette méthode gère les erreurs côté serveur et renvoie les données au format json. _Cette méthode est à appeler si `useFetch` n'est pas utilisé. `useFetch` utilise cette méthode par défaut._

**Il est également possible d'implémenter le mode hors ligne dans ce provider.**

Ce provider s'appelle de la manière suivante : `const { ... } = useApi();`

Le `AuthProvider` contient également 2 dossiers :

-   `fetchs` : Ce dossier liste l'ensemble des fetchs de l'application. Il est conseillé de créer un fichier par entité métier. Exemple : [`authApi`](https://github.com/C-Koya-Tech/React-native-boilerplate/blob/master/src/services/api/fetchs/authApi.ts).
-   `react-queries` : Ce dossier liste l'ensemble des **keys**, des **queries** et des **mutations**. Il est conseillé de créer un fichier par entité métier, ce fichier s'occupera de la CRUD de l'entité. Exemple :

```js
export const entityQueryKey = (entityId: number) => ["entity", entityId];

export function useEntity(entityId: number) {
    const queryClient = useQueryClient();
    const { useFetch } = useApi();
    const queryKey = entityQueryKey(entityId);

    const getEntity = useQuery<IEntity[], Error>(queryKey, () => API.getEntity(entityId));

    const postEntity = useMutation({
        mutationFn: (variables: IEntity) => useFetch(() => API.postEntity(variables)),
        onSuccess: () => queryClient.invalidateQueries(queryKey),
    });

    const updateEntity = useMutation({
        mutationFn: (variables: IEntity) => useFetch(() => API.updateEntity(variables)),
        onSuccess: () => queryClient.invalidateQueries(queryKey),
    });

    const deleteEntity = useMutation({
        mutationFn: (variables: IEntity) => useFetch(() => API.deleteEntity(variables)),
        onSuccess: () => queryClient.invalidateQueries(queryKey),
    });

    return { getEntity, postEntity, updateEntity, deleteEntity };
}

```

### `AuthProvider`

Provider concernant l'authentification de l'utilisateur, il vérifie si l'utilisateur est encore connecté au démarrage de l'application. Il s'occupe également de la connexion et de la déconnexion et permet de récupérer l'utilisateur courant sous forme d'un objet.

Le provider met à disposition les objets suivants :

-   `user` : L'utilisateur connecté sous forme d'objet.
-   `login` : Méthode pour se connecter à partir d'un nom d'utilisateur et d'un mot de passe.
-   `logout` : Méthode pour déconnecter l'utilisateur courant.

Ce provider s'appelle de la manière suivante : `const { ... } = useAuth();`

### `ErrorHandlerProvider`

Provider concernant l'interception des erreurs en tout genre. Intercepte automatiquement les erreurs (`throw new Error("error message")`) au runtime de react, dans les callbacks et les fonctions asynchrones. **Les erreurs ne sont pas interceptés dans certains cas, par exemple dans les providers, il sera donc nécessaire d’appeler la méthode `handleError`.**

Le provider met à disposition les objets suivants :

-   `handleError` : Méthode qui affiche une modal d'erreur avec le texte passé en paramètre de la forme suivante : `new Error("error message")`. Le format d'affichage et les callbacks de la modal sont [customizables](https://github.com/C-Koya-Tech/React-native-boilerplate/blob/master/src/interfaces/errorHandlerTypes.ts). Exemple :

```js
handleError(error, {
    type: ERROR_MODALS.DOUBLE_ACTION_MODAL,
    parameters: {
        validateActionTitle: "Accéder aux réglages",
        declineActionTitle: "Plus tard",
        onValidate: () => Linking.openSettings(),
    },
});
```

Ce provider s'appelle de la manière suivante : `const { ... } = useErrorHandler();`

### `PermissionProvider`

Provider concernant les permissions de l'application. Il vérifie et demande les permissions manquantes au démarrage de l'application. Il fournit également pour chaque permission, si celle-ci est autorisé ou non. Pour chaque nouvelle permission il faudra l'ajouter à la main dans ce provider et dans le fichier [`AndroidManifest.xml`](https://github.com/C-Koya-Tech/React-native-boilerplate/blob/master/android/app/src/main/AndroidManifest.xml).

Le provider met à disposition les objets suivants :

-   `has__NAME__Permission` : Variable indiquant si la permission a été autorisé ou non.
-   `request___NAME___Permission` : Méthode permettant d'ouvrir une modal pour demander à l'utilisateur d'accepter ou de refuser la permission.

Ce provider s'appelle de la manière suivante : `const { ... } = usePermission();`

# Librairies utilisés

## `react-query`

[React Query](https://react-query.tanstack.com/overview) est un package qui permet d'effectuer des requêtes, mettre en cache le résultat et mettre à jour facilement les données sans "state global".

_Il n'est pas obligatoire d'utiliser react query. Cependant react-query peut être utilisé en complément de [`useFetch`](#apiprovider) pour gérer plus facilement les states et bénéficier de la mise en cache des données._

_Exemple d'utilisation :_

```js
const { data: user } = useQuery("user", () => useFetch(AUTH_API.whoami));
```

## `styled-components`

[Styled components](https://styled-components.com/docs/basics) est un package qui permet de styliser plus simplement les composants. Le package permet de dissocier la stylisation des composants et leur utilisation. Il permet également une syntax plus lisible et maintenable.

_Il n'est pas obligatoire d'utiliser styled components, cependant son utilisation est fortement recommandé pour créer des [composants réutilisables](#components). L'alternative est de créer un [StyleSheet](https://reactnative.dev/docs/stylesheet)._

## `react-native-vector-icons`

[Vector Icons](https://github.com/oblador/react-native-vector-icons) est un package qui permet d'ajouter des icônes à l'application. Le package fournit une [liste des icônes disponibles](https://oblador.github.io/react-native-vector-icons/). Dans ce boilerplate, les icônes proviennent de `MaterialCommunityIcons`, il est préféré d'utiliser des icônes de la même provenance pour ne pas mélanger les styles.

## `formik`

[Formik](https://formik.org/docs/overview) est un package qui permet de simplifier la gestion des states, la validation des champs, ... lors de la création d'un formulaire. Un exemple juste [ici](https://github.com/C-Koya-Tech/React-native-boilerplate/blob/master/src/pages/Login/Login.tsx).

## Librairies additionnels

Les packages les plus importants sont listés ci-dessus, cependant il y en a d'autres. Pour voir les packages additionnels, ils sont listés dans le [`package.json`](https://github.com/C-Koya-Tech/React-native-boilerplate/blob/master/package.json).
