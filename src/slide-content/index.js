import overview from "./chapter-overview.json";
import what from "./what.json";
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
import pluginNamingConvention from "./plugin-naming-convention.json";
import pluginNamingConventionOfficial from "./plugin-naming-convention-official.json";
import installPlugins from "./install-plugins.json";
import addPluginsLater from "./add-plugins-later.json";
import end from "./end.json";

export default {
  slides: [
    what,
    superior,
    installation,
    vueCliService,
    listVueCliServiceCommands,
    presets,
    presetsShare,
    installPlugins,
    addPluginsLater
  ],
  imageSlides: [
    end,
    github,
    docu,
    scaffold,
    projectStructureCli3,
    projectStructureCli3Abstraction,
    pluginNamingConvention,
    pluginNamingConventionOfficial
  ],
  chapters: [overview],
  codepens: []
};
