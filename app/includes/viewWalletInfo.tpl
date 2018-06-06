<main class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.viewWalletInfo.id" ng-controller='viewWalletCtrl' ng-cloak>

    <article class="collapse-container">
        <div class="row">
            <div class="col-xs-12">
                <div ng-click="wd = !wd">
                    <h1 translate="x_Wallet">
                        Wallet
                    </h1>
                </div>
            </div>
        </div>

    </article>

    <article class="row">

        @@if (site === 'cx' ) {  @@include( './viewWalletInfo-content.tpl', { "site": "cx" } )    }
        @@if (site === 'mew') {  @@include( './viewWalletInfo-content.tpl', { "site": "mew" } )   }

    </article>

<a class="btn btn-primary ng-scope ng-binding" ng-click="toWalletGeneration()">Generate Wallet
</a>

</main>
