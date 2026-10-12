# Script PowerShell para sincronizar fotos da clínica
$destino = Join-Path $PSScriptRoot "assets\images"
if (!(Test-Path $destino)) {
    New-Item -ItemType Directory -Path $destino -Force | Out-Null
}

$origem = "C:\Users\Win11\.gemini\antigravity\brain\c67f2e6f-3b20-4465-acb8-2b139d37eed9\.user_uploaded"

$mapeamento = @{
    "media_1791824091314_dc8d4422.png" = "clinica-espaco-sala.png"
    "media_1791824091266_c1c48f98.png" = "clinica-espaco-detalhe.png"
    "media_1791824091287_4a400857.png" = "profissional-estetica.png"
    "media_1791824091334_5eb96ac7.png" = "metodo-kellus-resultado-1.png"
    "media_1791824091376_1f5b7049.png" = "metodo-kellus-resultado-2.png"
}

foreach ($item in $mapeamento.GetEnumerator()) {
    $arquivoOrigem = Join-Path $origem $item.Key
    $arquivoDestino = Join-Path $destino $item.Value
    if (Test-Path $arquivoOrigem) {
        Copy-Item -Path $arquivoOrigem -Destination $arquivoDestino -Force
        Write-Host "[OK] Copiado: $($item.Value)" -ForegroundColor Green
    } else {
        Write-Host "[AVISO] Arquivo não encontrado: $($item.Key)" -ForegroundColor Yellow
    }
}

Write-Host "Imagens sincronizadas com sucesso na pasta assets/images!" -ForegroundColor Cyan
