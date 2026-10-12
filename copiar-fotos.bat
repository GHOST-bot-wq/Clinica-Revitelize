@echo off
chcp 65001 >nul
echo ========================================================
echo  REVITALIZE ROSTO E CORPO - COPIAR FOTOS REAIS DA CLINICA
echo ========================================================
echo.

if not exist "assets\images" (
    mkdir "assets\images"
    echo [OK] Pasta assets\images criada.
)

set "ORIGEM=C:\Users\Win11\.gemini\antigravity\brain\c67f2e6f-3b20-4465-acb8-2b139d37eed9\.user_uploaded"

if exist "%ORIGEM%\media_1791824091314_dc8d4422.png" (
    copy /Y "%ORIGEM%\media_1791824091314_dc8d4422.png" "assets\images\clinica-espaco-sala.png" >nul
    echo [OK] Copiada: clinica-espaco-sala.png (Espaco amplo da clinica com painel iluminado)
)

if exist "%ORIGEM%\media_1791824091266_c1c48f98.png" (
    copy /Y "%ORIGEM%\media_1791824091266_c1c48f98.png" "assets\images\clinica-espaco-detalhe.png" >nul
    echo [OK] Copiada: clinica-espaco-detalhe.png (Maca de atendimento e espelho organico)
)

if exist "%ORIGEM%\media_1791824091287_4a400857.png" (
    copy /Y "%ORIGEM%\media_1791824091287_4a400857.png" "assets\images\profissional-estetica.png" >nul
    echo [OK] Copiada: profissional-estetica.png (Retrato oficial da profissional)
)

if exist "%ORIGEM%\media_1791824091334_5eb96ac7.png" (
    copy /Y "%ORIGEM%\media_1791824091334_5eb96ac7.png" "assets\images\metodo-kellus-resultado-1.png" >nul
    echo [OK] Copiada: metodo-kellus-resultado-1.png (Procedimento corporal real em maca)
)

if exist "%ORIGEM%\media_1791824091376_1f5b7049.png" (
    copy /Y "%ORIGEM%\media_1791824091376_1f5b7049.png" "assets\images\metodo-kellus-resultado-2.png" >nul
    echo [OK] Copiada: metodo-kellus-resultado-2.png (Definicao corporal com oleo/massagem)
)

echo.
echo ========================================================
echo  Concluido com sucesso! Abra o index.html no navegador.
echo ========================================================
pause
