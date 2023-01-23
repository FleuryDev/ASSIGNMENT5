$(function () { // Identique à document.addEventListener(« DOMContentLoaded »...

    Identique à document.querySelector(« #navbarToggle »).addEventListener(« blur »,...
    $(« #navbarToggle »). blur(function (événement) {
      var screenWidth = fenêtre. innerWidth;
      if (screenWidth < 768) {
        $(« #collapsable-nav »). collapse('hide');
      }
    });
  });
  
  (fonction (globale) {
  
  var dc = {};
  
  var homeHtmlUrl = « snippets/home-snippet.html »;
  var allCategoriesUrl =
    « https://coursera-jhu-default-rtdb.firebaseio.com/categories.json »;
  var categoriesTitleHtml = « snippets/categories-title-snippet.html »;
  var categoryHtml = « snippets/category-snippet.html »;
  var menuItemsUrl =
    « https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/ »;
  var menuItemsTitleHtml = « snippets/menu-items-title.html »;
  var menuItemHtml = « snippets/menu-item.html »;
  
  Fonction pratique pour insérer innerHTML pour 'select'
  var insertHtml = function (sélecteur, html) {
    var targetElem = document. querySelector(sélecteur);
    targetElem. innerHTML = html;
  };
  
  Afficher l’icône de chargement à l’intérieur de l’élément identifié par 'sélecteur'.
  var showLoading = function (sélecteur) {
    var html = « <div class='text-center'> »;
    html += « <img src='images/ajax-loader.gif'></div> »;
    insertHtml(sélecteur, html);
  };
  
  Substitut de retour de '{{propName}}'
  avec propValue dans une 'chaîne' donnée
  var insertProperty = function (string, propName, propValue) {
    var propToReplace = « {{ » + propName + "}}";
     chaîne = chaîne
      . replace(new RegExp(propToReplace, « g »), propValue);
    chaîne de retour ;
  };
  
  Supprimez la classe 'active' de la maison et passez au bouton Menu
  var switchMenuToActive = fonction () {
    Supprimer 'actif' du bouton d’accueil
    classes var  = document. querySelector(« #navHomeButton »). className;
     classes = classes. replace(new RegExp(« active », « g »), "");
    document. querySelector(« #navHomeButton »). className = classes;
  
    Ajouter 'actif' au bouton de menu si ce n’est pas déjà fait
    classes = document. querySelector(« #navMenuButton »). className;
    if (classes. indexOf(« actif ») === -1) {
      classes += " actif »;
      document. querySelector(« #navMenuButton »). className = classes;
    }
  };
  
  Au chargement de la page (avant les images ou CSS)
  document. addEventListener(« DOMContentLoaded », function (event) {
  
  TODO: ETAPE 0: Examinez le code de
  ***commencer***
  À
  ***Finir***
  sous.
  Nous avons modifié ce code pour récupérer toutes les catégories du serveur au lieu de
  demandant simplement un extrait HTML à domicile. Nous avons maintenant aussi une autre fonction
  appelé buildAndShowHomeHTML qui recevra toutes les catégories du serveur
  et les traiter: choisissez une catégorie aléatoire, récupérez l’extrait HTML personnel, insérez cela
  catégorie aléatoire dans l’extrait HTML d’accueil, puis insérez cet extrait dans notre
  page principale (index.html).
  //
  // TODO: STEP 1: Substitute [...] below with the *value* of the function buildAndShowHomeHTML,
  // so it can be called when server responds with the categories data.
  
  // *** start ***
  // On first load, show home view
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    allCategoriesUrl,
    [...], // ***** <---- TODO: STEP 1: Substitute [...] ******
    true); // Explicitly setting the flag to get JSON from server processed into an object literal
  });
  // *** finish **
  
  
  // Builds HTML for the home page based on categories array
  // returned from the server.
  function buildAndShowHomeHTML (categories) {
  
    // Load home snippet page
    $ajaxUtils.sendGetRequest(
      homeHtmlUrl,
      function (homeHtml) {
  
        // TODO: STEP 2: Here, call chooseRandomCategory, passing it retrieved 'categories'
        // Pay attention to what type of data that function returns vs what the chosenCategoryShortName
        Le nom de la variable implique qu’elle s’attend.
        var chosenCategoryShortName = ....
  
  
        TODO: ÉTAPE 3: Remplacez {{randomCategoryShortName}} dans l’extrait html home par le
        catégorie choisie à l’ETAPE 2. Utilisez la fonction insertProperty existante à cette fin.
        Parcourez ce code pour obtenir un exemple d’utilisation de la fonction insertProperty.
        AVERTISSEMENT! Vous insérez quelque chose qui devra aboutir à un Javascript valide
        syntaxe car la substitution de {{randomCategoryShortName}} devient un argument
        en cours de passage dans la fonction $dc.loadMenuItems. Réfléchissez à ce dont cet argument a besoin
        à quoi ressembler. Par exemple, un appel valide ressemblerait à ceci :
        $dc.loadMenuItems('L')
        Astuce: vous devez entourer le nom court de la catégorie choisie avec quelque chose avant d’insérer
        Il dans l’extrait HTML d’accueil.
        //
        var homeHtmlToInsertIntoMainPage = ....
  
  
        TODO: ÉTAPE 4: Insérez le code HTML produit à l’ETAPE 3 dans la page principale
        Utilisez la fonction insertHtml existante à cette fin. Parcourez ce code pour trouver un exemple
        de la façon de procéder.
        // ....
  
      },
      false); // Faux ici parce que nous obtenons juste du HTML normal du serveur, donc pas besoin de traiter JSON.
  }
  
  
  Ensemble donné d’objets de catégorie, renvoie un objet de catégorie aléatoire.
  fonction chooseRandomCategory (catégories) {
    Choisissez un index aléatoire dans le tableau (de 0 inclusivement jusqu’à la longueur du tableau (exclusivement))
    var randomArrayIndex = Mathématiques. floor(Math. aléatoire() * catégories. longueur);
  
    renvoyer un objet category avec ce randomArrayIndex
    return categories[randomArrayIndex];
  }
  
  
  Charger la vue des catégories de menu
  Dc. loadMenuCategories = fonction () {
    showLoading(« #main-content »);
    $ajaxUtils. sendGetRequest(
      allCategoriesUrl,
      buildAndShowCategoriesHTML);
  };
  
  
  Charger la vue des éléments de menu
  'categoryShort' est un short_name pour une catégorie
  Dc. loadMenuItems = function (categoryShort) {
    showLoading(« #main-content »);
    $ajaxUtils. sendGetRequest(
      menuItemsUrl + categoryShort + « .json »,
      buildAndShowMenuItemsHTML);
  };
  
  
  Crée du code HTML pour la page des catégories en fonction des données
  à partir du serveur
  function buildAndShowCategoriesHTML (catégories) {
    Charger l’extrait de titre de la page des catégories
    $ajaxUtils. sendGetRequest(
      catégoriesTitreHtml,
      fonction (categoriesTitleHtml) {
        Récupérer un extrait de catégorie unique
        $ajaxUtils. sendGetRequest(
          catégorieHtml,
          fonction (categoryHtml) {
            Basculer la classe CSS active vers le bouton de menu
            switchMenuToActive();
  
            var catégoriesAfficherHtml =
              buildCategoriesViewHtml(catégories,
                                      catégoriesTitreHtml,
                                      catégorieHtml);
            insertHtml(« #main-content », catégoriesAfficherHTML);
          },
          faux);
      },
      faux);
  }
  
  
  Utilisation de données de catégories et d’extraits html
  construire des catégories afficher HTML à insérer dans la page
  fonction buildCategoriesViewHtml(catégories,
                                   catégoriesTitreHtml,
                                   catégorieHtml) {
  
    var finalHtml = catégoriesTitreHtml;
    finalHtml += « <section class='row'> »;
  
    Boucle sur les catégories
    for (var  i = 0; i < catégories. longueur; i++) {
      Insérer des valeurs de catégorie
      var html = catégorieHTML;
      var  name = «  » + catégories[i]. nom;
      var short_name = catégories[i]. short_name;
      .html =
        insertProperty(html, « nom », nom);
      .html =
        insertProperty(html,
                       « short_name »,
                       short_name);
      finalHtml += html;
    }
  
    finalHtml += « </section> »;
    return finalHtml;
  }
  
  
  
  Crée du code HTML pour la page de catégorie unique en fonction des données
  à partir du serveur
  function buildAndShowMenuItemsHTML (categoryMenuItems) {
    Charger l’extrait de titre de la page des éléments de menu
    $ajaxUtils. sendGetRequest(
      menuItemsTitreHtml,
      fonction (menuItemsTitleHtml) {
        Récupérer un extrait d’élément de menu unique
        $ajaxUtils. sendGetRequest(
          menuItemHtml,
          fonction (menuItemHtml) {
            Basculer la classe CSS active vers le bouton de menu
            switchMenuToActive();
  
            var menuItemsViewHtml =
              buildMenuItemsViewHtml(categoryMenuItems,
                                     menuItemsTitreHtml,
                                     menuItemHtml);
            insertHtml(« #main-content », menuItemsViewHtml);
          },
          faux);
      },
      faux);
  }
  
  
  Utilisation des données et des extraits de code des catégories et des éléments de menu
  Afficher les éléments de menu de construction HTML à insérer dans la page
  function buildMenuItemsViewHtml(categoryMenuItems,
                                  menuItemsTitreHtml,
                                  menuItemHtml) {
  
    menuItemsTitreHtml =
      insertProperty(menuItemsTitleHtml,
                     « nom »,
                     categoryMenuItems. catégorie. nom);
    menuItemsTitreHtml =
      insertProperty(menuItemsTitleHtml,
                     « special_instructions »,
                     categoryMenuItems. catégorie. special_instructions);
  
    var finalHtml = menuItemsTitleHtml;
    finalHtml += « <section class='row'> »;
  
    Boucle sur les éléments de menu
    var menuItems = categoryMenuItems. menu_items;
    var catShortName = categoryMenuItems. catégorie. short_name;
    for (var  i = 0; i < menuItems. longueur; i++) {
      Insérer des valeurs d’élément de menu
      var html = menuItemHtml;
      .html =
        insertProperty(html, « short_name », menuItems[i]. short_name);
      .html =
        insertProperty(html,
                       « catShortName »,
                       catShortName);
      .html =
        insertItemPrice(html,
                        « price_small »,
                        menuItems[i]. price_small);
      .html =
        insertItemPortionName(html,
                              « small_portion_name »,
                              menuItems[i]. small_portion_name);
      .html =
        insertItemPrice(html,
                        « price_large »,
                        menuItems[i]. price_large);
      .html =
        insertItemPortionName(html,
                              « large_portion_name »,
                              menuItems[i]. large_portion_name);
      .html =
        insertProperty(html,
                       « nom »,
                       menuItems[i]. nom);
      .html =
        insertProperty(html,
                       « description »,
                       menuItems[i]. description);
  
      Ajouter clearfix après chaque deuxième élément de menu
      if (i % 2 !== 0) {
        .html +=
          « <div class='clearfix visible-lg-block visible-md-block'></div> »;
      }
  
      finalHtml += html;
    }
  
    finalHtml += « </section> »;
    return finalHtml;
  }
  
  
  Ajoute le prix avec '$' si le prix existe
  fonction insertItemPrice(html,
                           pricePropName,
                           prixValeur) {
    S’il n’est pas spécifié, remplacez par une chaîne vide
    Si (! prixValeur) {
      return insertProperty(html, pricePropName, "");
    }
  
    priceValue = « $ » + priceValue. toFixed(2);
     html = insertProperty(html, pricePropName, priceValue);
    Renvoyer HTML;
  }
  
  
  Ajoute le nom de la portion entre parenthèses s’il existe
  fonction insertItemPortionName(html,
                                 portionPropName,
                                 portionValeur) {
    S’il n’est pas spécifié, renvoyer la chaîne d’origine
    Si (! portionValeur) {
      return insertProperty(html, portionPropName, "");
    }
  
    portionValue = « ( » + portionValue + ")";
     html = insertProperty(html, portionPropName, portionValue);
    Renvoyer HTML;
  }
  
  
  mondial. $dc = DC;
  
  })(fenêtre);