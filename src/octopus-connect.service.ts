import {Injectable} from "@angular/core";
import {ConfigurationProvider} from "./configuration-provider.class";
import {DataConnector} from "octopus-connect";

@Injectable()
export class OctopusConnectService extends DataConnector {

    constructor(
        public configurationProvider:ConfigurationProvider
    ) {
        super(configurationProvider.configuration);
    }
}