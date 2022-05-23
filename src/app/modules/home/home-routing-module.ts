import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeResolverGuard } from "src/app/guards/resolvers/home-resolver.guard";
import { HomeComponentComponent } from "./home-component/home-component.component";

const routes: Routes = [
    {
        path: '', component: HomeComponentComponent, 
        resolve: {
            homeResolver: HomeResolverGuard,
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule{};