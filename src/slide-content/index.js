import overview from "./chapter-overview.json";
import what from "./what.json";
import github from "./github.json";
import docu from "./docu.json";
import installation from "./installation.json";
import scaffold from "./scaffold.json";
import vueCliService from "./vue-cli-service.json";
import listVueCliServiceCommands from "./list-vue-cli-service-commands.json";
import projectStructureCli3 from "./project-structure-cli3.json";
import superior from "./superior-to-v2.json";
import end from "./end.json";

export default {
  slides: [
    what,
    superior,
    installation,
    vueCliService,
    listVueCliServiceCommands
  ],
  imageSlides: [end, github, docu, scaffold, projectStructureCli3],
  chapters: [overview],
  codepens: []
};
