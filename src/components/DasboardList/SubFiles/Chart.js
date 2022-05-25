    import React from 'react';
    import Plot from 'react-plotly.js';
    
    class Stock extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          stockChartXValues: [],
          stockChartYValues: []
        }
      }
    
      componentDidMount() {
          
        this.fetchStock();
      }
    
      fetchStock() {
        const pointerToThis = this;
        const API_KEY = 'HGJWFG4N8AQ66ICD';
        let StockSymbol = this.props.id;
        console.log(StockSymbol)
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
    
        fetch(API_Call)
          .then(
            function(response) {
              return response.json();
            }
          )
          .then(
            function(data) {
              console.log(data);
    
              for (var key in data['Time Series (Daily)']) {
                stockChartXValuesFunction.push(key);
                stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
              }
    
              pointerToThis.setState({
                stockChartXValues: stockChartXValuesFunction,
                stockChartYValues: stockChartYValuesFunction
              });
            }
          )
      }
    
      render() {
        return (
          <div>
            <Plot
              data={[
                {
                  x: this.state.stockChartXValues,
                  y: this.state.stockChartYValues,
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: {color: 'red'},
                }
              ]}
              layout={{width: 1100, height: 450, title: 'GRAPH'}}
            />
          </div>
        )
      }
    }
    
    export default Stock;