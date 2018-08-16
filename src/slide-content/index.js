import overview from "./chapter-overview.json";
import what from "./what.json";
import benefits from "./benefits.json";
import github from "./github.json";
import docu from "./docu.json";
import installation from "./installation.json";
import scaffold from "./scaffold.json";
import presets from "./presets.json";
import presetsShare from "./presets-share.json";
import vueCliService from "./vue-cli-service.json";
import listVueCliServiceCommands from "./list-vue-cli-service-commands.json";
import projectStructureCli3 from "./project-structure-cli3.json";
import projectStructureCli3Abstraction from "./project-structure-cli3-abstraction.json";
import superior from "./superior-to-v2.json";
import plugins from "./plugins.json";
import pluginsConcept from "./plugins-concept.json";
import pluginNamingConvention from "./plugin-naming-convention.json";
import pluginNamingConventionOfficial from "./plugin-naming-convention-official.json";
import installPlugins from "./install-plugins.json";
import addPluginsLater from "./add-plugins-later.json";
import end from "./end.json";
import dotEnv from "./dot-env.json";
import cssPreprocessors from "./css-preprocessors.json";
import noWebpackConfig from "./no-webpack-config.json";
import vueConfig from "./vue-config.json";
import instantPrototyping from "./instant-prototyping.json";
import building from "./building.json";
import buildingProd from "./building-prod.json";
import bundleAnalyzer from "./bundle-analyzer.json";
import buildingProdAdvanced from "./building-prod-advanced.json";
import buildingTargets from "./building-targets.json";
import webComponents from "./web-components.json";
import modernMode from "./modern-mode.json";
import vueService from "./vue-service.json";
import packageJsonVueService from "./package-json-vue-cli-service.json";
import vueUi from "./vue-ui.json";

export default {
  slides: [
    what,
    benefits,
    superior,
    installation,
    vueCliService,
    listVueCliServiceCommands,
    presets,
    presetsShare,
    installPlugins,
    addPluginsLater,
    cssPreprocessors,
    dotEnv,
    noWebpackConfig,
    vueConfig,
    instantPrototyping,
    building,
    buildingProd,
    buildingTargets,
    modernMode,
    pluginsConcept,
    buildingProdAdvanced
  ],
  imageSlides: [
    end,
    github,
    docu,
    scaffold,
    projectStructureCli3,
    projectStructureCli3Abstraction,
    pluginNamingConvention,
    pluginNamingConventionOfficial,
    webComponents,
    packageJsonVueService,
    bundleAnalyzer
  ],
  chapters: [overview, vueService, vueUi, plugins],
  codepens: []
};
