public function index()
{
    return Property::where('is_active', true)->get();
}

public function store(Request $request)
{
    $request->validate([
        'title' => 'required',
        'description' => 'required',
        'type' => 'required|in:location,vente',
        'price' => 'required|numeric',
        'address' => 'required',
        'expiration_date' => 'nullable|date'
    ]);

    $property = Property::create([
        'user_id' => auth()->id(),
        ...$request->all()
    ]);

    return response()->json($property, 201);
}
