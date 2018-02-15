import {ModuleWithProviders, NgModule} from "@angular/core";
import {OctopusConnectService} from "./src/octopus-connect.service";
import {DataConnectorConfig} from "octopus-connect";
import {ConfigurationProvider} from "./src/configuration-provider.class";

@NgModule({
    providers: [
        OctopusConnectService
    ]
})
export class OctopusConnectModule {

    static forRoot(configuration:DataConnectorConfig):ModuleWithProviders {
        return {
            ngModule: OctopusConnectModule,
            providers: [
                ConfigurationProvider,
                {provide: "configuration", useValue: configuration}
            ]
        }
    }
}