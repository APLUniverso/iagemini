# Prompts y Respuestas del Proyecto (40 ítems)

## P01  
**Prompt:** Define los 5 principales KPIs de un dashboard de "Comercio Electrónico en Vivo".  
**Respuesta:**  
1. Tasa de Conversión en Vivo  
2. Valor de Ventas por Minuto  
3. Carritos Abandonados en Tiempo Real  
4. Inventario Disponible vs. Demanda  
5. Usuarios Activos en Sesión de Compra

## P02  
**Prompt:** Genera una estructura de 4 pestañas principales para el dashboard.  
**Respuesta:**  
- **Visión General**  
- **Latencia por Servicio**  
- **Errores y Disponibilidad**  
- **Recursos del Sistema**

## P03  
**Prompt:** Crea una matriz de decisiones para elegir entre Kafka y RabbitMQ para ingesta de datos en tiempo real.  
**Respuesta:**  
| Característica | Kafka | RabbitMQ |
| --- | --- | --- |
| Durabilidad | Muy Alta | Alta |
| Latencia | Muy Baja | Baja |
| Escalabilidad | Excelente | Moderada |
| Modelo | Log distribuido | Cola tradicional |
| Óptimo para | Streams grandes | Mensajería flexible |

## P04  
**Prompt:** Estima requisitos de almacenamiento.  
**Respuesta:** ~31.5 GB ≈ 0.0315 TB.

## P05  
**Prompt:** Redacta un User Story.  
**Respuesta:**  
Como Analista de Operaciones, quiero ser notificado cuando ocurra una anomalía, para reaccionar rápidamente.

## P06  
**Prompt:** Sugiere paleta accesible.  
**Respuesta:** #FFFFFF, #00E5FF, #FF5252, #FFD740, #80FF8A

## P07  
**Prompt:** Modelo de datos.  
**Respuesta:**  
Metrics, Services, Tags.

## P08  
**Prompt:** Riesgos técnicos.  
**Respuesta:** Desincronización, I/O, fallos en Kubernetes.

## D09  
**Prompt:** Diseño de visualización.  
**Respuesta:** Gráfico de líneas con umbrales y marcador actual.

## D10  
**Prompt:** Acciones del usuario.  
**Respuesta:** Filtrar servicio, región, rango tiempo, zoom/pan.

## D11  
**Prompt:** CSS KPI card.  
**Respuesta:**  
```css
.kpi-card {
  background: blue;
  color: white;
  padding: 16px;
  border-radius: 8px;
}
```

## D12  
**Prompt:** Patrón WebSocket.  
**Respuesta:** Singleton.

## D13  
**Prompt:** Leyenda 5 componentes.  
**Respuesta:** Rojo-A, Verde-B, Amarillo-C, Azul-D, Púrpura-E.

## D14  
**Prompt:** Wireframe header.  
**Respuesta:** Logo izq, título centro, selector der, última actualización der inferior.

## D15  
**Prompt:** Microinteracción loading.  
**Respuesta:** Spinner pulsante.

## D16  
**Prompt:** Tooltip p99.  
**Respuesta:** “p99: 99% de las peticiones fueron más rápidas”.

## B17  
**Prompt:** Conexión PostgreSQL.  
**Respuesta:**  
```python
import psycopg2
try:
    conn = psycopg2.connect(host="localhost",dbname="metrics_db")
except Exception as e:
    print("Error:", e)
```

## B18  
**Prompt:** SQL promedio 5 minutos.  
**Respuesta:**  
```sql
SELECT AVG(value) FROM time_series
WHERE metric='cpu_usage'
AND timestamp >= NOW() - INTERVAL '5 min';
```

## B19  
**Prompt:** WebSocket Node init.  
**Respuesta:**  
```javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({port:8080});
```

## B20  
**Prompt:** JSON KPI.  
**Respuesta:**  
```json
{"kpi_id":"sales_rate","value":12.5,"timestamp":1678880000,"unit":"units/min","trend":"UP"}
```

## B21  
**Prompt:** Pasos endpoint.  
**Respuesta:** Definir ruta, conectar DB, validar parámetros, responder JSON.

## B22  
**Prompt:** Lambda simulación.  
**Respuesta:**  
```python
import random
def handler(e=None,c=None):
    return {"metric_name":"cpu_usage","value":random.randint(1,100)}
```

## B23  
**Prompt:** Dockerfile.  
**Respuesta:**  
```dockerfile
FROM openjdk:17-alpine
WORKDIR /app
COPY app.jar app.jar
EXPOSE 8080
CMD ["java","-jar","app.jar"]
```

## B24  
**Prompt:** Seguridad WS.  
**Respuesta:** JWT handshake, CORS restringido, límite por IP.

## F25  
**Prompt:** Componente React.  
**Respuesta:**  
```jsx
useEffect(()=>{
 const ws=new WebSocket("wss://example.com");
 ws.onmessage=m=>{const d=JSON.parse(m.data); if(d.kpi_id==="my_kpi") setKpiValue(d.value)};
 return()=>ws.close();
},[]);
```

## F26  
**Prompt:** Chart.js init.  
**Respuesta:**  
```html
<canvas id="chart"></canvas>
<script>
new Chart(document.getElementById('chart'),{
 type:'line',
 data:{labels:['1','2','3','4','5'],datasets:[{data:[1,2,3,4,5]}]}
});
</script>
```

## F27  
**Prompt:** Parseo JSON.  
**Respuesta:**  
```javascript
function parseMessage(m){const d=JSON.parse(m);return{metric:d.metric,value:d.value,ts:d.timestamp};}
```

## F28  
**Prompt:** Responsividad.  
**Respuesta:** grid, grid-template-columns, media queries.

## F29  
**Prompt:** KPI parpadeo.  
**Respuesta:**  
```jsx
<span className={currentValue>90?"blink-red":""}>{currentValue}</span>
```

## F30  
**Prompt:** Throttle.  
**Respuesta:** Procesar 1 actualización/seg usando throttle.

## F31  
**Prompt:** Error WS.  
**Respuesta:** “¡Conexión perdida! Intentando reconectar…”

## F32  
**Prompt:** Últimas alertas.  
**Respuesta:**  
- **12:01:10** Error API  
- **12:01:12** Latencia alta  
- **12:01:14** Caída nodo  
- **12:01:18** Retries altos  
- **12:01:20** Cola saturada

## T33  
**Prompt:** Casos de prueba.  
**Respuesta:** (10,15)→UP, (15,10)→DOWN, (10,10)→NO_CHANGE, (0,100)→UP, (50,49)→DOWN.

## T34  
**Prompt:** E2E.  
**Respuesta:**  
```js
cy.injectData({metric:"cpu",value:50})
cy.get("#cpu-chart").should("contain","50")
```

## T35  
**Prompt:** A/B.  
**Respuesta:** Deployment v2, Ingress 10/90, monitoreo.

## T36  
**Prompt:** Métricas frontend.  
**Respuesta:** TTFB, FCP, LCP, CLS.

## T37  
**Prompt:** Bash curl.  
**Respuesta:**  
```bash
curl -H "Accept: application/json" "https://api.dashboard.com/metrics?service=auth"
```

## T38  
**Prompt:** Rollback.  
**Respuesta:** detener v2, redirigir tráfico, restaurar DB.

## T39  
**Prompt:** Commit.  
**Respuesta:** `fix(chart): corrige error de actualización en IE`

## T40  
**Prompt:** Checklist QA.  
**Respuesta:** carga<2s, KPIs<1s, consistencia, responsive, reconexión WS.
