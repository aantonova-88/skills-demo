interface ErrorStateProps {
    errorMessage: string;
}

const ErrorState = ({ errorMessage }: ErrorStateProps) => {
    return (
        <div style={{ padding: 24 }}>
            <div style={{ marginBottom: 12, color: "#b91c1c" }}>{errorMessage}</div>
            <button onClick={() => window.location.reload()}>Retry</button>
        </div>
    )
}


export default ErrorState;