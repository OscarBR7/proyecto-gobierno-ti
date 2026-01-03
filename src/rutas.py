import os

def listar_estructura(ruta=".", prefijo=""):
    elementos = sorted(os.listdir(ruta))
    total = len(elementos)

    for i, nombre in enumerate(elementos):
        path = os.path.join(ruta, nombre)
        es_ultimo = i == total - 1

        conector = "└── " if es_ultimo else "├── "
        print(prefijo + conector + nombre)

        if os.path.isdir(path):
            nuevo_prefijo = prefijo + ("    " if es_ultimo else "│   ")
            listar_estructura(path, nuevo_prefijo)

if __name__ == "__main__":
    carpeta_actual = os.path.basename(os.getcwd())
    print(carpeta_actual + "/")
    listar_estructura()
