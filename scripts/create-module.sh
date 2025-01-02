#!/bin/bash

# Verifica se o nome do módulo foi passado
if [ -z "$1" ]; then
  echo "Uso: ./create-module.sh <nome-do-modulo>"
  exit 1
fi

# Nome do módulo
MODULE_NAME=$1

# Caminho base
BASE_PATH="src/modules/$MODULE_NAME"

# Criação das pastas
mkdir -p "$BASE_PATH/dto"
mkdir -p "$BASE_PATH/interface"
mkdir -p "$BASE_PATH/factories"

# Criação dos arquivos
echo "// export interface $MODULE_NAME Dto {}" > "$BASE_PATH/dto/$MODULE_NAME.dto.ts"
echo "// export class $MODULE_NAME Factory {}" > "$BASE_PATH/factories/$MODULE_NAME.factory.ts"
echo "// export interface I$MODULE_NAME {}" > "$BASE_PATH/interface/$MODULE_NAME.interface.ts"
echo "// export class $MODULE_NAME Controller {}" > "$BASE_PATH/$MODULE_NAME.controller.ts"
echo "// Requisições HTTP relacionadas ao módulo $MODULE_NAME" > "$BASE_PATH/$MODULE_NAME.http"
echo "// export class $MODULE_NAME Service {}" > "$BASE_PATH/$MODULE_NAME.service.ts"
echo "// export class $MODULE_NAME Routes {}" > "$BASE_PATH/$MODULE_NAME.routes.ts"
echo "// export class $MODULE_NAME extends BaseRepository<any>" > "src/repositories/$MODULE_NAME.repository.ts"

# Mensagem de sucesso
echo "Estrutura do módulo '$MODULE_NAME' criada com sucesso em $BASE_PATH!"
