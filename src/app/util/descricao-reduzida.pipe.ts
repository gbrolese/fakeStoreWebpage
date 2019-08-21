import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:'DescricaoReduzida'
})

export class DescricaoReduzida implements PipeTransform {
    transform(texto:string, truncarEm:number ): string {
        if (texto.length >= truncarEm ){
            return texto.substr(0, truncarEm ) + '...' 
        } 

        return texto
    }
}