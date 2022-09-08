function creatCurrencyButtons() {
	const { currencies } = this.props;
	return (
		currencies &&
		currencies.map((item, index) => (
			<li
				key={index}
				onClick={() =>
					this.props.changeCurrency(item.symbol, item.label, index)
				}
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
          fontSize: "15px",
				}}>
				<span>{item.symbol}</span>
				<span>{item.label}</span>
			</li>
		))
	);
}

export default creatCurrencyButtons;
