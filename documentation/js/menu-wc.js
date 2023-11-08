'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">salad-bar documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-34a0ed52349dc45df68449baa9099a26f973e63fe53f02093b30873e2a33eb7c425ac54f040286b08997137bc4597daa173366ed80039d8fd73fcf8ecd07cfe8"' : 'data-bs-target="#xs-components-links-module-AppModule-34a0ed52349dc45df68449baa9099a26f973e63fe53f02093b30873e2a33eb7c425ac54f040286b08997137bc4597daa173366ed80039d8fd73fcf8ecd07cfe8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-34a0ed52349dc45df68449baa9099a26f973e63fe53f02093b30873e2a33eb7c425ac54f040286b08997137bc4597daa173366ed80039d8fd73fcf8ecd07cfe8"' :
                                            'id="xs-components-links-module-AppModule-34a0ed52349dc45df68449baa9099a26f973e63fe53f02093b30873e2a33eb7c425ac54f040286b08997137bc4597daa173366ed80039d8fd73fcf8ecd07cfe8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NameFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NameFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/KitchenModule.html" data-type="entity-link" >KitchenModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-KitchenModule-28481a12fb578dda4bb58086a60830d7f5fb6d1483313d6a496c942201e33d5139deb9dc4c521f3d50d8ee82936c28c2d2524b21675569a11ba0790450eae201"' : 'data-bs-target="#xs-components-links-module-KitchenModule-28481a12fb578dda4bb58086a60830d7f5fb6d1483313d6a496c942201e33d5139deb9dc4c521f3d50d8ee82936c28c2d2524b21675569a11ba0790450eae201"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-KitchenModule-28481a12fb578dda4bb58086a60830d7f5fb6d1483313d6a496c942201e33d5139deb9dc4c521f3d50d8ee82936c28c2d2524b21675569a11ba0790450eae201"' :
                                            'id="xs-components-links-module-KitchenModule-28481a12fb578dda4bb58086a60830d7f5fb6d1483313d6a496c942201e33d5139deb9dc4c521f3d50d8ee82936c28c2d2524b21675569a11ba0790450eae201"' }>
                                            <li class="link">
                                                <a href="components/KitchenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KitchenComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/KitchenRoutingModule.html" data-type="entity-link" >KitchenRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SaladModule.html" data-type="entity-link" >SaladModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SaladModule-66c6fb510b4b9e7c4df9402d29f95faa49352a02bdf697e893f8ad637d442e0d8d251b9a4d4b38f2306f608ca1c73874bcaeb492c374b4dd711e13328733d724"' : 'data-bs-target="#xs-components-links-module-SaladModule-66c6fb510b4b9e7c4df9402d29f95faa49352a02bdf697e893f8ad637d442e0d8d251b9a4d4b38f2306f608ca1c73874bcaeb492c374b4dd711e13328733d724"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SaladModule-66c6fb510b4b9e7c4df9402d29f95faa49352a02bdf697e893f8ad637d442e0d8d251b9a4d4b38f2306f608ca1c73874bcaeb492c374b4dd711e13328733d724"' :
                                            'id="xs-components-links-module-SaladModule-66c6fb510b4b9e7c4df9402d29f95faa49352a02bdf697e893f8ad637d442e0d8d251b9a4d4b38f2306f608ca1c73874bcaeb492c374b4dd711e13328733d724"' }>
                                            <li class="link">
                                                <a href="components/SaladComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaladComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToppingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToppingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SaladRoutingModule.html" data-type="entity-link" >SaladRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedMaterialModule.html" data-type="entity-link" >SharedMaterialModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/RouterEffects.html" data-type="entity-link" >RouterEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SaladEffects.html" data-type="entity-link" >SaladEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToppingsService.html" data-type="entity-link" >ToppingsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SaladState.html" data-type="entity-link" >SaladState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Topping.html" data-type="entity-link" >Topping</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});